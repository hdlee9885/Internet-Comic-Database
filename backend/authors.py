import json
import requests


name = input("Enter name seperated by '-': ")

headers = {
    'User-Agent': 'EE461L',
    #'From': 'youremail@domain.com'  # This is another valid field
}
searchurl = "http://comicvine.gamespot.com/api/search/?api_key=9df7c108bb78e94a0b082fc87c2c8ce8e116b73c&format=json&field_list=api_detail_url&limit=1&resources=person&query=" + name
#print(searchurl)


r = requests.get(url = searchurl, headers=headers) 
  
# extracting data in json format 

#print(r.content)
data = json.loads(r.content)

apiurl = data['results'][0]['api_detail_url'] + "?api_key=9df7c108bb78e94a0b082fc87c2c8ce8e116b73c&format=json"
#print(apiurl)

r2 = requests.get(url = apiurl, headers=headers) 

#print(r2.content)
data2 = json.loads(r2.content)
data3 = data2['results']
#with open('data.json', 'w') as f:
#print(json.dumps(data2, sort_keys=True, indent=4 * ' '))

filename = name + ".json"

with open(filename, 'w') as f:
    f.write(json.dumps(data3, sort_keys=True, indent=4 * ' '))
