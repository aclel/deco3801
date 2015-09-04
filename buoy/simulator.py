import socket, sys, threading, json, httplib
from time import sleep

HOSTNAME = "localhost"
PORT = 1337

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

	def send_reading(self, jstr):
		data = json.load(open('reading.json'))
		headers = {"Content-type": "application/json", "Accept": "text/plain"}
		conn = httplib.HTTPConnection("localhost", 1337)
		conn.request("POST", "/", json.dumps(data), headers)

	def update_running(self, running):
		self.running = running

class BuoyThread():

	timeout = 60
	kill = 0
	buoy = None
	def __init__(self, buoy, timeout):
		self.timeout = timeout
		self.buoy = buoy

	def run(self, lock):
		i = 0
		jstr = json.load(open('reading.json'))
		lock.acquire()
		running = self.buoy.running
		lock.release()
		while i < self.timeout and running:
			lock.acquire()
			print "\nBuoy {0}: POSTing example".format(self.buoy_name)
			self.buoy.send_reading(jstr)
			lock.release()
			print "\nBuoy {0}: Sleeping".format(self.buoy.name)
			sleep(self.timeout)
			i += 1

class Simulate():

	hostname = HOSTNAME
	port = PORT
	buoys = []
	threads = []

	def __init__(self):
		self.run()

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

	def run(self):
		lock = threading.Lock()
		print ""
		print HEADER + "Team Neptune DECO3801 Buoy Simulator" + ENDC
		print HEADER + "        Type 'help' for help" + ENDC
		while True:
			try:
				cmd = raw_input("> ")
			except EOFError:
				print OKGREEN + "User EOF" + ENDC
				sys.exit(10)
			except KeyboardInterrupt:
				print OKGREEN + "^C Exit"
				sys.exit(11)
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
				elif part == 'update':
					self.cmd_update(cmd)
				elif part == 'use':
					self.cmd_use(cmd)
				elif part == 'start':
					self.cmd_start(cmd, lock)
				elif part == 'stop':
					self.cmd_stop(cmd, lock)
				else:
					print WARNING + "Command not found." + ENDC

	def cmd_ls_buoys(self):
		for buoy in self.buoys:
			print buoy.name

	def cmd_help(self):
		commands = [["  new <guid> <name> <ip>   ", "creates a new buoy"],
					["  list                     ", "list all buoys"],
					["  update <name> <interval> ", "update a buoy's ping time"],
					["  use <name> <cvar>        ", "do something on a buoy"],
					["  start <name>             ", "start a buoy"],
					["  stop <name>              ", "stop a buoy"]]
		print OKGREEN + "Available tasks: " + ENDC
		for name, desc in commands:
			print OKGREEN + name + "... " + desc + ENDC

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
			elif (name == "" or (self.name_in_use(name))):
				raise InvalidBuoy("Name in use.")
			elif (ip == "" or (self.ip_in_use(ip))):
				raise InvalidBuoy("IP/Hostname in use.")
			else:
				self.buoys.append(Buoy(guid, name, ip, True))
				print "Buoy " + name + " successfully created."
		except InvalidBuoy as e:
			print "Could not create buoy. " + e.value

	def cmd_update(self, args):
		pass

	def cmd_use(self, args):
		pass

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


class Connection():

	sock = None

	def __init__(self, hostname, port):

		# Get adrrinfo of host
		serv = socket.getaddrinfo(hostname, port, socket.AF_UNSPEC, 
			socket.SOCK_STREAM)
		# Unpack tuple
		for x in serv:
			print x
		family, socktype, proto, cannonname, servaddr = serv[1]
		# Attempt to create a socket
		try:
			self.sock = socket.socket(family, socktype, proto)
		except socket.error as err:
			print "Could not open socket: " + err.strerror
			sys.exit(3)
		# Attempt to connect to server
		try:
			self.sock.connect(servaddr)
		except socket.error as err:
			self.sock.close()
			print "Could not connect to server: " + err.strerror
			sys.exit(4)

s = Simulate()