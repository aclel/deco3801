##################### IMPORTS #################################################
import socket
import json
import time
from time import sleep

HEADER = '\033[95m'
OKBLUE = '\033[36m'
OKGREEN = '\033[92m'
WARNING = '\033[93m'
FAIL = '\033[91m'
ENDC = '\033[0m'
BOLD = '\033[1m'
UNDERLINE = '\033[4m'

##################### CONSTANTS ###############################################
node_id = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 6, 58, 7654]
gps_lat = [-27.527713, -27.505614, -27.515581, -27.495005, -27.472497, -27.465896, -27.447495, -27.443702, -27.392356, -27.290392, -27.247492, -27.441904, -27.134959, -27.350458, -27.501533]
gps_long = [152.948390, 152.971527, 153.001882, 153.019854, 153.008080, 153.032714, 153.049305, 153.103964, 153.154528, 153.195216, 153.223709, 153.329967, 153.101314, 153.155559, 153.019375]
turbidity = [3, 3.05, 2.95, 2.9, 3, 3.05, 3.1, 3.15, 3.05, 3, 2, 1, 4, 5, 3.01]
temp = [22.35, 22.2, 22, 21.8, 22.2, 22.4, 22.45, 22.25, 22.15, 21.95, 22, 21.5, 20, 18, 18.5]
batt = [99, 99, 98, 98, 97, 97, 96, 96, 95, 95, 49, 24, 19, 10, 2]
time = time.time()

##################### VARIABLES ###############################################
UDP_PORT = 33333
MESSAGE = ''
#MESSAGE = json.dumps([{"status":{"node_id": node_id, "timestamp": time}, "sensor-data": {"GPS": {"lat":gps_lat, "long":gps_long}, "turb": turbidity, "temp":temp}}])
#print(MESSAGE)

UDP_IP = raw_input(WARNING + "Enter the server IP [syrah.timhadwen.com]: " + ENDC)

num_buoys = len(node_id)

##################### FUNCTIONS ###############################################
def process_command(command):
    try:
        if(command != 'c'):
            int(command)
    except ValueError:
        print( FAIL + "Invalid command" + ENDC)
    else:
        if(command == 'c'):
	    node = raw_input("Which buoy? ")
            # Command request being sent
            print(OKBLUE + "Command request send." + ENDC)
            MESSAGE = json.dumps([{"type": "commandreq", "status":{"buoy_id": node}}])
            sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
            try:
                data, addr = sock.recvfrom(100)
                if(data == "PING"):
                    MESSAGE = json.dumps([{"type": "ping", "status":{"buoy_id": node}}])
                    sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
            except socket.timeout:
                print(FAIL + "Server timed out" + ENDC)
                return
            if(data != ""):
                print(OKBLUE + "Got command: " + OKGREEN + data + ENDC)

        elif(int(command) >= 0 and int(command) <= (num_buoys-1)):
            MESSAGE = json.dumps([{"type": "data", "status":{"buoy_id": node_id[int(command)], "time": time, "gps_lat": gps_lat[int(command)], "gps_long": gps_long[int(command)]}, "sensors": {"2": turbidity[int(command)], "1":temp[int(command)], "0":batt[int(command)]}}])
            sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
            print(WARNING + MESSAGE + ENDC)
            print(OKBLUE + "Sent to server." + ENDC)
        elif(int(command) == 999):
            x = 0
            while(True):
                try:
                    MESSAGE = json.dumps([{"type": "data", "status":{"buoy_id": node_id[x%(num_buoys)], "time": time, "gps_lat": gps_lat[x%(num_buoys)], "gps_long": gps_long[x%(num_buoys)]}, "sensors": {"2": turbidity[x%(num_buoys)], "1":temp[x%(num_buoys)], "0":batt[x%(num_buoys)]}}])
                    sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
                    print(MESSAGE)
                    print(str(x) + " packets sent to server")
                    x += 1
                    sleep(0.1)
                except KeyboardInterrupt:
                    print("Interupted.")
                    break
        else:
            print("Invalid command")

##################### MAIN ####################################################

if(UDP_IP == ""):
    UDP_IP = "syrah.timhadwen.com"
print(WARNING + "IP Address: " + UDP_IP + " Port: " + str(UDP_PORT))

print("##### Flood Monitor: Node Emulator #####" + ENDC)

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.settimeout(2)
sock.bind(("", UDP_PORT))

while True:
    process_command(raw_input(BOLD + OKBLUE + ">" + ENDC + " " + OKGREEN))
