import requests

def generatetoken():
  x = "Bearer Mk9r2_GMAIL_COM_AUT:CRdGgfb4bAihZ1tmm64gjA=="

  headers = {
    'Content-Type':'application/json',
    "Authorization": x
  }
  response = requests.post('https://authservice.priaid.ch/login', headers=headers)
  token = response.json()["Token"]
  return token
