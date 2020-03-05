import requests
from Crypto.Hash import MD5
import time
import random
import os





def main():
    ts = int(time.time() * 1000)
    session = requests.session()
    API_KEY = '49c2a0e570caabef266bbacc3c046e02'
    privateKey =  '01403d9adcad6e32037ea01fcbeba95088db02ce'
    ts = str(ts)
    hashh = createHash(ts,API_KEY,privateKey)


    params = {'limit' : 50, 'apikey':API_KEY, 'ts': ts, 'hash':hashh }
    url = "http://gateway.marvel.com/v1/public/characters"
    #url = "http://gateway.marvel.com/v1/public/comics/21975"
    #?limit=3"+"&apikey="+API_KEY;
    #url += "&ts="+ts +"&hash="+hashh;

    resp = session.get(url, params= params)
    #print(resp.text)
    response_dict = (resp.json())
    randNum = random.randint(0,100)
    f = open("resp.json{}".format(randNum), 'w+')
    f.write(resp.text)
    charactersToIssues = {}

    for info in response_dict['data']['results']:
        heroName = info['name']
        charId  =  info['id']
        #character = (heroName, charId)
        image = info['thumbnail']
        image_url = image['path'] + '/landscape_incredible.' + image['extension']
        getImage(session,params,heroName,image_url)
        issues = info['comics']['items']
        issueList = []
        for issue in issues:
            issueList.append((issue['name'], issue['resourceURI']))
        charactersToIssues[charId] = issueList



def getImage(session, params,heroName, url):
    params.pop('limit')
    response = session.get(url, params = params)
    OUTPUT_DIR = 'pictures'
    new_file_path = os.path.join(OUTPUT_DIR,'{}.jpg'.format(heroName))
    with open(new_file_path, 'wb') as out_file:
        out_file.write(response.content)
    params['limit'] = 5
    

def createHash(ts, API_KEY, privateKey):
    h = MD5.new()
    hashString = ts + privateKey + API_KEY
    hashString = hashString.encode()
    h.update(hashString)
    hashh = h.hexdigest()
    hashh = str(hashh)
    return hashh


main()


