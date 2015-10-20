import socket, sys, threading, json, httplib
from time import sleep


# I AM A BUOY 
# BUT NOT A REAL BUOY


HOSTNAME = "teamneptune.co"
PORT = 8081
READINGS_ENDPOINT = "/buoys/api/readings"
COMMANDS_ENDPOINT = "/buoys/api/commands"

HEADER = '\033[95m'
OKBLUE = '\033[94m'
OKGREEN = '\033[92m'
WARNING = '\033[93m'
FAIL = '\033[91m'
ENDC = '\033[0m'

# Custom exceptions
class InvalidBuoy(Exception):
	def __init__(self, value):
		self.value = value
	
	def __str__(self):
		return repr(self.value)

class InvalidArguments(Exception):
	def __init__(self, value):
		self.value = value
	
	def __str__(self):
		return repr(self.value)

# An instance of a buoy
class Buoy():

	guid = ""
	name = ""
	ip = ""
	running = False

	def __init__(self, guid, name, ip, running):		
		self.guid = guid
		self.name = name
		self.ip = ip
		self.running = running

	def send_command(self):
		pass

	#def get_auth_token(self):
	#	data = json.load(open('creds.json'))
	#	headers = {"Content-type": "application/json"}
	#	conn = httplib.HTTPConnection(HOSTNAME, PORT)
	#	conn.request("POST", "/api/login", json.dumps(data), headers)
	#	res = conn.getresponse()
	#	if res.status != 200:
	#		print WARNING + "Server NOT OK. returned " + str(res.status) + ENDC
	#		return None
	#	try:
	#		jstr = json.loads(res.read())
	#	except ValueError:
	#		print WARNING + "JSON could not be decoded." + ENDC
	#		return None
	#	return jstr['token']

	def send_reading(self, readingsf):
		data = None
		try:
			data = json.load(open(readingsf))
		except ValueError:
			print WARNING + "Buoy {0}: Could not parse/read/open JSON readings file: ".format(self.name) + readingsf + "." + ENDC
			return None
		#token = self.get_auth_token()
		#if token == None:
		#	print WARNING + "Could not open file: " + readingsf + "." + ENDC
		#	return None
		headers = {"Content-type": "application/json", 
				   "Accept": "text/plain"}

		conn = httplib.HTTPConnection(HOSTNAME, PORT)
		conn.request("POST", READINGS_ENDPOINT, json.dumps(data), headers)
		print OKBLUE + "Buoy {0}: Sent reading.json to server.".format(self.name) + ENDC
		try:
			res = conn.getresponse()
		except httplib.BadStatusLine:
			print WARNING + "Buoy {0}: Could not get response from server.".format(self.name) + ENDC
			return None
		print OKBLUE + "Buoy {0}: Server response: {1}".format(self.name, res.status) + ENDC
		#print OKBLUE + res.reason + ENDC
		#print OKBLUE + res.read() + ENDC
		return 1

	def update_running(self, running):
		self.running = running

# A thread instance of a buoy instance
class BuoyThread():

	timeout = 10
	kill = 0
	buoy = None
	readingsf = "reading.json"
	iterations = 10

	def __init__(self, buoy,  timeout, iterations, readingsf = "reading.json"):	
		self.buoy = buoy
		self.timeout = timeout
		self.iterations = iterations
		self.readingsf = readingsf

	def run(self, lock):
		i = 0
		# Parent process might be accessing/changing the buoy.running flag, 
		# so lets not deadlock.
		lock.acquire()
		running = self.buoy.running = True
		lock.release()
		while i < self.iterations and running:
			# Potentially unnecessary, I don't think the parent process will
			# be able to access 'buoy' at this time
			lock.acquire()
			if (self.buoy.send_reading(self.readingsf) == None):
				print OKBLUE + ("Buoy {0}: Could not connect to server or couldn't send reading. " 
						"Trying again {1} times.").format(self.buoy.name, 
						self.iterations - 1) + ENDC
			lock.release()
			print OKBLUE + "Buoy {0}: Sleeping for {1}".format(self.buoy.name, 
					self.timeout) + ENDC
			sleep(self.timeout)
			i += 1
		print OKBLUE + "Buoy {0}: Thread ending.".format(self.buoy.name) + ENDC

# CLI
class Simulate():

	hostname = HOSTNAME
	port = PORT
	buoys = []
	threads = []
	f = None

	def __init__(self):
		lock = threading.Lock()
		print HEADER + "Team Neptune DECO3801 Buoy Simulator" + ENDC
		print HEADER + "        Type 'help' for help" + ENDC
		if (len(sys.argv) > 1):
			print HEADER + "\nLoading commands from file.\n" + ENDC
			try:
				self.f = open(sys.argv[1])
			except IOError:
				print FAIL + "Could not open commands file. Continuing." + ENDC
				self.run(lock)
			for line in self.f:
				self.parse_command(line, lock)

		self.run(lock)

	def guid_in_use(self, guid):
		for buoy in self.buoys:
			if (buoy.guid == guid):
				return True
		return False

	def name_in_use(self, name):
		for buoy in self.buoys:
			if (buoy.name == name):
				return True
		return False

	def ip_in_use(self, ip):
		for buoy in self.buoys:
			if (buoy.ip == ip):
				return True
		return False

	def parse_command(self, cmd, lock):
		if (cmd in ("q", "quit", "exit")):
			print OKGREEN + "User quit" + ENDC
			sys.exit(0)
		elif (cmd in ("help", "?")):
			self.cmd_help()
		elif (cmd in ("ls", "list")):
			self.cmd_ls_buoys()
		elif (cmd == ""):
			pass
		else:
			part = cmd.split()[0]
			if part == 'new':
				self.cmd_new(cmd, lock)
			elif part == 'load':
				self.cmd_load(cmd)
			elif part == 'send':
				self.cmd_send(cmd, lock)
			elif part == 'poll':
				self.cmd_poll(cmd, lock)
			elif part == 'start':
				self.cmd_start(cmd, lock)
			elif part == 'stop':
				self.cmd_stop(cmd, lock)
			else:
				print WARNING + "Command not found." + ENDC

	def run(self, lock):
		while True:
			try:
				cmd = raw_input("> ")
			except EOFError:
				if self.f != None:
					self.f.close()
				print OKGREEN + "User EOF" + ENDC
				sys.exit(10)
			except KeyboardInterrupt:
				if self.f != None:
					self.f.close()
				print OKGREEN + "^C Exit" + ENDC
				sys.exit(11)
			self.parse_command(cmd, lock)

	def cmd_ls_buoys(self):
		for buoy in self.buoys:
			print buoy.name

	def cmd_help(self):
		commands = [[" new <guid> <name> <ip>     ", "creates a new buoy"],
					[" list                       ", "list all buoys"],
					[" update <name> <interval>   ", 
						"update a buoy's ping time"],
					[" poll <name>                ", "get buoy to poll server"],
					[" send <buoy> [reading.json] ", "sends a reading request"],
					[" start <name> <iterations>\n   <timeout> [reading.json] ",
						"start a buoy"],
					[" stop <name>                ", "stop a buoy"]]
		print OKGREEN + "Available tasks: " + ENDC
		for name, desc in commands:
			print OKGREEN + name + "... " + desc + ENDC
		print (OKGREEN + "\nFor automation invoke: \n" 
				+ "      python simulator.py [file]" + ENDC)
		print (OKGREEN + "For a buoy to send a reading per day you would do: \n" 
				+ "      start buoy numDays 86400" + ENDC)

	def cmd_new(self, args, lock):
		cvars = args.split()
		guid = ""
		name = ""
		ip = ""
		try:
			if (len(cvars) != 4):
				raise InvalidArguments("Wrong number of arguments for new: " +
					"new <guid> <name> <ip>")
			else:
				guid = cvars[1]
				name = cvars[2]
				ip = cvars[3]
		except InvalidArguments as e:
			print WARNING + e.value + ENDC
			return
		try:
			if (guid == "") or (self.guid_in_use(guid)):
				raise InvalidBuoy("GUID in use.")
				return
			elif (name == "" or (self.name_in_use(name))):
				raise InvalidBuoy("Name in use.")
				return
			elif (ip == "" or (self.ip_in_use(ip))):
				raise InvalidBuoy("IP/Hostname in use.")
				return
			else:
				self.buoys.append(Buoy(guid, name, ip, True))
				print "Buoy " + name + " successfully created."
		except InvalidBuoy as e:
			print "Could not create buoy. " + e.value

	def cmd_send(self, args, lock):
		cvars = args.split()
		name = ""
		readingsf = "reading.json"
		try:
			if len(cvars) < 2 or len(cvars) > 3:
				raise InvalidArguments("Wrong number of arguments for send: " +
					"send <buoy> [reading.json]")
			else:
				name = cvars[1]
				if len(cvars) == 3:
					readingsf = cvars[2]
		except InvalidArguments as e:
			print WARNING + e.value + ENDC
			return
		try:
			if (name == ""):
				raise InvalidBuoy("Invalid buoy name.")
			else:
				for bthread in self.threads:
					print bthread.name
					if (bthread.name == name):
						for buoy in self.buoys:
							if buoy.name == name:
								buoy.send_reading(readingsf)
				print WARNING + "No thread exists. Creating one." + ENDC
				for buoy in self.buoys:
					if (buoy.name == name):
						print (OKBLUE + "Buoy {0}: Thread created.".format(name) 
								+ ENDC)
						# buoy, timeout, iterations, file
						buoythread = BuoyThread(buoy, 1, 1, readingsf)
						thread = threading.Thread(target=buoythread.run, 
							args=(lock,))
						thread.daemon = True
						thread.name = buoy.name
						self.threads.append(thread)
						thread.start()
		except InvalidBuoy as e:
			print WARNING + "Could not start buoy. " + e.value + ENDC

	def cmd_start(self, args, lock):
		cvars = args.split()
		name = ""
		try:
			if (len(cvars) != 2):
				raise InvalidArguments("Wrong number of arguments for start: "
					"start <name>")

			else:
				name = cvars[1]
		except InvalidArguments as e:
			print WARNING + e.value + ENDC
			return
		try:
			if (name == ""):
				raise InvalidBuoy("Invalid buoy name.")
			else:
				for buoy in self.buoys:
					if (buoy.name == name):
						print OKBLUE + "Buoy {0}: Thread created.".format(name) 
						# buoy, timeout, iterations, file
						buoythread = BuoyThread(buoy, 5, 10)
						thread = threading.Thread(target=buoythread.run, 
							args=(lock,))
						thread.daemon = True
						thread.name = buoy.name
						self.threads.append(thread)
						thread.start()
		except InvalidBuoy as e:
			print WARNING + "Buoy {0}: Could not start me: ".format(name) + e.value + ENDC

	def cmd_stop(self, args, lock):
		cvars = args.split()
		name = ""
		try:
			if (len(cvars) != 2):
				raise InvalidArguments("Wrong number of arguments for stop: " +
					"stop <name>")
			else:
				name = cvars[1]
		except InvalidArguments as e:
			print WARNING + e.value + ENDC
		try:
			if (name == ""):
				raise InvalidBuoy("Invalid buoy name.")
			else:
				for bthread in self.threads:
					print bthread.name
					if (bthread.name == name):
						for buoy in self.buoys:
							if buoy.name == name:
								buoy.running = False
								self.threads.remove(bthread)
								print (OKBLUE + "Buoy {0}: Thread is kill.".format(buoy.name)
									+ ENDC)

		except InvalidBuoy as e:
			print WARNING + "Could not stop buoy. " + e.value + ENDC

s = Simulate()