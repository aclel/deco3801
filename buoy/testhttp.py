import httplib, json

data = json.load(open('creds.json'))
headers = {"Content-type": "application/json"}
conn = httplib.HTTPConnection('teamneptune.co', 8080)
conn.request("POST", "/api/login", json.dumps(data), headers)
response = conn.getresponse()
#print response.status, response.reason
#sprint response.read()


#split = x.split()
str1 = json.loads(response.read())
print str1['token']
#jstr = json.loads(x.split()[0])
#print jstr
#print x

#print x['token']

