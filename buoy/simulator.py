import socket, sys, threading, json, httplib
from time import sleep

HOSTNAME = "teamneptune.co"
PORT = 8080

HEADER = '\033[95m'
OKBLUE = '\033[94m'
OKGREEN = '\033[92m'
WARNING = '\033[93m'
FAIL = '\033[91m'
ENDC = '\033[0m'

def jprint(jstr):
	print json.dumps(jstr, sort_keys=True, 
		indent=4, separators=(',', ': '))

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

	def get_auth_token(self):
		data = json.load(open('creds.json'))
		headers = {"Content-type": "application/json"}
		conn = httplib.HTTPConnection(HOSTNAME, PORT)
		conn.request("POST", "/api/login", json.dumps(data), headers)
		res = conn.getresponse()
		if res.status != 200:
			print WARNING + "Server NOT OK. returned " + res.status + ENDC
			return None
		try:
			jstr = json.loads(res.read())
		except ValueError:
			print WARNING + "JSON could not be decoded." + ENDC
			return None
		return jstr['token']

	def send_reading(self, jstr):
		try:
			data = json.load(open('reading.json'))
		except ValueError:
			print WARNING + "Could not parse reading.json" + ENDC
		token = self.get_auth_token()
		if token == None:
			print WARNING + "Could not open reading.json" + ENDC
			return None
		headers = {"Content-type": "application/json", 
					"Accept": "text/plain", 
					"Authorization": "Bearer " + token}
		conn = httplib.HTTPConnection(HOSTNAME, PORT)
		conn.request("POST", "/", json.dumps(data), headers)
		return 1

	def update_running(self, running):
		self.running = running

class BuoyThread():

	timeout = 10
	kill = 0
	buoy = None
	def __init__(self, buoy, timeout):
		self.timeout = timeout
		self.buoy = buoy

	def run(self, lock):
		i = 0
		## GET READING ##
		jstr = json.load(open('reading.json'))

		# Parent process might be accessing/changing the buoy.running flag, 
		# so lets not deadlock.
		lock.acquire()
		running = self.buoy.running
		lock.release()
		# i is hard coded at the moment
		while i < 10 and running:
			# Potentially unnecessary, I don't think the parent process will
			# be able to access 'buoy' at this time
			lock.acquire()
			if (self.buoy.send_reading(jstr) == None):
				print OKBLUE + ("Buoy {0}: Could not connect to server. " 
						"Trying again in {1}.").format(self.buoy.name, 
						self.timeout) + ENDC
				lock.release()
			else:
				print OKBLUE + "Buoy {0}: POSTing example".format(self.buoy.name) + ENDC
				#sleep(10)
				#ontinue
			print OKBLUE + "Buoy {0}: Sleeping for {1}".format(self.buoy.name, self.timeout) + ENDC
			sleep(self.timeout)
			i += 1
		print OKBLUE + "Buoy {0}: Thread ending." + ENDC

class Simulate():

	hostname = HOSTNAME
	port = PORT
	buoys = []
	threads = []
	fname = None
	f = None

	def __init__(self):
		lock = threading.Lock()

		if (len(sys.argv) > 1):
			try:
				self.f = open(sys.argv[1])
			except IOError:
				print FAIL + "Could not open commands file. Continuing." + ENDC
				self.run(lock)
			for line in f:
				parse_command(line, lock)

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
				self.cmd_send(cmd)
			elif part == 'poll':
				self.cmd_poll(cmd)
			elif part == 'start':
				self.cmd_start(cmd, lock)
			elif part == 'stop':
				self.cmd_stop(cmd, lock)
			else:
				print WARNING + "Command not found." + ENDC
	def run(self, lock):
		
		print HEADER + "Team Neptune DECO3801 Buoy Simulator" + ENDC
		print HEADER + "        Type 'help' for help" + ENDC

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
				print OKGREEN + "^C Exit"
				sys.exit(11)
			self.parse_command(cmd, lock)

	
	#TODO
	def cmd_load(self, args):
		try:
			if (len(cvars) < 2):
				raise InvalidArguments("Wrong number of arguments for load: " +
					"new <file>")
			else:
				pass
		except InvalidArguments as e:
			print WARNING + e.value + ENDC


	def cmd_ls_buoys(self):
		for buoy in self.buoys:
			print buoy.name

	def cmd_help(self):
		commands = [[" new <guid> <name> <ip>     ", "creates a new buoy"],
					[" load <file>                ", "loads cmds from file"],
					[" list                       ", "list all buoys"],
					[" update <name> <interval>   ", "update a buoy's ping time"],
					[" poll <name>                ", "get buoy to poll server"],
					[" send [reading|auth] <buoy> ", "sends an auth/reading req"],
					[" start <name>               ", "start a buoy"],
					[" stop <name>                ", "stop a buoy"]]
		print OKGREEN + "Available tasks: " + ENDC
		for name, desc in commands:
			print OKGREEN + name + "... " + desc + ENDC
		print OKGREEN + "For automation invoke: python simulator.py [file]"

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
		try:
			if (guid == "") or (self.guid_in_use(guid)):
				print "Guid: " + guid
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

	def cmd_start(self, args, lock):
		cvars = args.split()
		name = ""
		try:
			if (len(cvars) != 2):
				raise InvalidArguments("Wrong number of arguments for start: start <name>")
			else:
				name = cvars[1]
		except InvalidArguments as e:
			print WARNING + e.value + ENDC
		try:
			if (name == ""):
				raise InvalidBuoy("Invalid buoy name.")
			else:
				for buoy in self.buoys:
					if (buoy.name == name):
						print "Starting buoy in new thread."
						buoythread = BuoyThread(buoy, 5)
						thread = threading.Thread(target=buoythread.run, 
							args=(lock,))
						thread.daemon = True
						thread.name = buoy.name
						self.threads.append(thread)
						thread.start()
		except InvalidBuoy as e:
			print "Could not start buoy. " + e.value

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
				for th in self.threads:
					if (th.name == name):
						for buoy in self.buoys:
							if buoy.name == name:
								buoy.running = False
		except InvalidBuoy as e:
			print "Could not start buoy. " + e.value

s = Simulate()