import socket, sys
from threading import Thread
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

class BuoyNode():

	guid = None

	def __init__(self):
		pass

	def go_to_sleep(self, time):
		print "Buoy ({0}): sleeping for {1} (hrs)".format(guid, time*360000)
		sleep(time)

	def send_command(self):
		conn = Connection()
		


class Simulate():

	hostname = HOSTNAME
	port = PORT
	def __init__(self):
		self.run()
		
	def run(self):
		#if (len(sys.argv) < 3):
		#	sys.stderr.write(FAIL + "Usage: python simulator.py host port\n" + ENDC)
		#	sys.exit(1
		print HEADER + "Team Neptune DECO3801 Buoy Simulator" + ENDC
		print HEADER + "Type 'help' for help" + ENDC

		
		while True:
			try:
				cmd = raw_input("> ")
			except EOFError:
				print OKGREEN + "User EOF" + ENDC
				sys.exit(10)
			if (cmd in ("q", "quit", "exit")):
				print OKGREEN + "User quit" + ENDC
				sys.exit(0)
			elif (cmd in ("help", "?")):
				self.cmd_help()
			elif (cmd in ("ls", "list")):
				self.cmd_ls_buoys()
			else:
				print WARNING + "Command not found." + ENDC

	def cmd_ls_buoys(self):
		pass

	def cmd_help(self):
		commands = [["    new <guid> <name> <ip>", "creates a new buoy"],
					["    list                  ", "list all buoys"],
					["    update <buoy> <cvar>  ", "update a buoy"],
					["    use <buoy> <cvar>     ", "do something on a buoy"],
					["    start <buoy>          ", "start a buoy"],
					["    stop <buoy>           ", "stop a buoy"]]
		print OKGREEN + "Available tasks: " + ENDC
		for name, desc in commands:
			print OKGREEN + name + "... " + desc + ENDC

	def cmd_start(self, args):


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



