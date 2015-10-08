import csv, time

LAT = -27.3568
LONG = 153.19794
print "INSERT INTO reading (latitude, longitude, timestamp, buoy_instance_id)"

with open('node1.csv') as csvfile:
	reader = csv.DictReader(csvfile)
	i = 0
	for row in reader:
		if i > 5000:
			break
		t = time.strptime(row['Time Stamp'], "%d/%m/%Y %H:%M")

		#"%Y-%m-%d %H:%M:%S"
		print "(" + str(LAT) + ", " + str(LONG) + ", '" + time.strftime("%Y-%m-%d %H:%M:%S", t) + "', 102),"
		#print(row['Time Stamp'], row['Turbidity (NTUs)'])
		i += 1
	csvfile.close()