import time
import requests
from flask import Flask, jsonify, request

def symptoms(token):
    url = "https://healthservice.priaid.ch/symptoms?token="+token+"&language=en-gb"
    try:
        res = requests.get(url)
        res = res.json()
        return jsonify(results=res)
    except:
        return "Bad Request", 400