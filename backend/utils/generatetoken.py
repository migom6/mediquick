import requests
import os


def generatetoken():
    x = f"Bearer {os.environ.get('APIMEDIC_API_KEY')}"

    headers = {
        'Content-Type': 'application/json',
        "Authorization": x
    }
    response = requests.post(
        'https://authservice.priaid.ch/login', headers=headers)
    token = response.json()["Token"]
    return token
