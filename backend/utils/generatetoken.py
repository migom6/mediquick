import requests

def generatetoken():
  x = "Bearer t7HZc_DIM-COIN_COM_AUT:UsN1/zfEB/qDZ3PcqLAgYw=="

  headers = {
    'Content-Type':'application/json',
    "Authorization": x
  }
  response = requests.post('https://authservice.priaid.ch/login', headers=headers)
  token = response.json()["Token"]
  return token
