import time
import requests
import time
import requests
from flask import Flask, jsonify, request

def diagnosis(token):
    symptoms = request.args.get("symptoms")
    gender = request.args.get("gender")
    year_of_birth = request.args.get("year_of_birth")
    url = "https://healthservice.priaid.ch/diagnosis"
    data = {"token": token,
            "language": "en-gb",
            "gender": gender,
            "year_of_birth": year_of_birth,
            "symptoms": symptoms}
    try:
        res = requests.get(url, data)
        res = res.json()
        return jsonify(results=res)
    except:
        return "Bad Request", 400