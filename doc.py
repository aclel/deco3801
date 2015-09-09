#!/usr/bin/python
from datetime import date
import os,sys
version = raw_input("Version (e.g. 0.0.1): ")
codename = raw_input("Codename (e.g. Duyung): ")
year = date.today().year
name = raw_input("Full name (e.g. Henry Chladil): ")
email = raw_input("Email (e.g. henry.ponco@gmail.com): ")
app = raw_input("Server (s) or webapp (w)?: ")
server = None

if app not in ('s', 'w'):
	print "You didn't type 'w' or 's'"
	sys.exit(1)
else:
	if app == 's':
		server = True
	else:
		server = False

docstr = ("/**\n"
		  " * Flood Monitoring System\n"
		  " * Version {0} ({1})\n"
		  " *\n"
		  " * Copyright (C) Team Neptune\n"
		  " * All rights reserved.\n"
		  " *\n"
		  " * @author     {3} <{4}>\n"
		  " * @version    {0}\n"
		  " * @copyright  Team Neptune ({2})\n"
		  " * @link       https://github.com/aclel/deco3801\n"
		  " */\n").format(version, codename, year, name, email)

ignore = [".DS_Store", "requests.postman_dump", ".html", ".json", ".log"]

# User defined, add a new path as necessary
serverpaths = ['./server', 
               './server/handlers', 
               './server/models']

# User defined, add a new path as necessary
webapppaths = ['./web_app', 
			   './web_app/app', 
			   './web_app/app/auth',
			   './web_app/app/config', 
			   './web_app/app/dashboard',
		       './web_app/app/services', 
		       './web_app/app/warnings']

for root, dirs, files in os.walk("."):
		if root in (serverpaths if server else webapppaths):
			for f in files:
				fok = True
				for ignorefile in ignore:
					if ignorefile in f:
						fok = False
				if fok:
					print "file: " + f
					fpath = os.path.join(root, f)
					#print x
					f = open(fpath, "r")
					f.seek(0, 0)
					lines = []
					i = 0
					for line in f:
						if (i < 11):
							pass
						else:
							lines.append(line)
						i += 1

					f.close()

					f = open(fpath, "w")
					f.seek(0, 0)
					f.write(docstr)
					for line in lines:
						f.write(line)
					f.close()