import requests
import json
from Crypto.Hash import MD5
import time
import random
import os

url = "https://superheroapi.com/api/527052257946912/620"

response = requests.get(url)
#print(response)

data = response.text
parsed = json.loads(data)
heroName = parsed['name']
#print(json.dumps(parsed, indent=4))
with open(heroName + '.json', 'w') as outfile:
    json.dump(parsed, outfile, indent=4)