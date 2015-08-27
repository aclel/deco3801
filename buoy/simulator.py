import socket, sys, threading
from time import sleep


HOSTNAME = "localhost"
PORT = 8080
HEADER = '\033[95m'
OKBLUE = '\033[94m'
OKGREEN = '\033[92m'
WARNING = '\033[93m'
FAIL = '\033[91m'
ENDC = '\033[0m'
#BOLD = '\033[1m'
#UNDERLINE = '\033[4m'

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
	running = 0

	def __init__(self, guid, name, ip):		
		self.guid = guid
		self.name = name
		self.ip = ip

	def go_to_sleep(self, time):
		print "Buoy ({0}): sleeping for {1} (hrs)".format(guid, time*360000)
		sleep(time)

	def send_command(self):
		conn = Connection()


class Simulate():

	hostname = HOSTNAME
	port = PORT
	buoys = []

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

	def run_thread(self):
		i = 0
		while i < 5:
			print "\nSending request to server and now sleeping."
			sleep(10)
			i += 1
		

	def run(self):
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
					self.cmd_new(cmd)
				elif part == 'update':
					self.cmd_update(cmd)
				elif part == 'use':
					self.cmd_use(cmd)
				elif part == 'start':
					self.cmd_start(cmd)
				elif part == 'stop':
					self.cmd_stop(cmd)
				else:
					print WARNING + "Command not found." + ENDC

	def cmd_ls_buoys(self):
		for buoy in self.buoys:
			print buoy.name

	def cmd_help(self):
		commands = [["    new <guid> <name> <ip>   ", "creates a new buoy"],
					["    list                     ", "list all buoys"],
					["    update <name> <interval> ", "update a buoy's ping time"],
					["    use <name> <cvar>        ", "do something on a buoy"],
					["    start <name>             ", "start a buoy"],
					["    stop <name>              ", "stop a buoy"]]
		print OKGREEN + "Available tasks: " + ENDC
		for name, desc in commands:
			print OKGREEN + name + "... " + desc + ENDC

	def cmd_new(self, args):
		cvars = args.split()
		guid = ""
		name = ""
		ip = ""
		try:
			if (len(cvars) != 4):
				raise InvalidArguments("Wrong number of arguments for new: new <guid> <name> <ip>")
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
				self.buoys.append(Buoy(guid, name, ip))
				print "Buoy " + name + " successfully created."
		except InvalidBuoy as e:
			print "Could not create buoy. " + e.value

	def cmd_update(self, args):
		pass

	def cmd_use(self, args):
		pass

	def cmd_start(self, args):
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
						# if thread not started
						print "Starting buoy in new thread."
						thread = threading.Thread(target=self.run_thread)
						thread.daemon = True
						thread.start()
		except InvalidBuoy as e:
			print "Could not start buoy. " + e.value

	def cmd_stop(self, args):
		pass


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

#con = Connection(HOSTNAME, PORT)

#con.sock.sendall("ayy lmaoo")
#data = con.sock.recv(1024)
#con.sock.close()
#print 'Received', repr(data)



