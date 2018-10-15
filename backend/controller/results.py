import time
import requests
from flask import Flask, jsonify, request
import time
import requests
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from flask import Flask, jsonify, request
from flask_cors import CORS
from controller.symptoms import symptoms
from utils.generatetoken import generatetoken
from utils.scraper import getdetails_disease
from dbconfig import dbconfig

def results(db, dbconnected, driver):
    disease = request.args.get("disease")
    # del query["_id"] #needed to remove mongodb defauld ObjectID key, because it can't be serialised
    if(dbconnected):
        query = db.Treatments.find_one({"disease": disease})
        if(query != None):
            print("querying from database")
            query["_id"] = str(query["_id"])
            return jsonify(result=query)
        else:
            res, status = getdetails_disease(driver, disease)
            print(res, status)
            if(status == 400):
                return "No results found", 400
            else:
                print("scraping the web for data")
                q = db.Treatments.insert_one(res)
                identity = q.inserted_id
                query = db.Treatments.find_one({"_id": identity})
                query["_id"] = str(query["_id"])
                return jsonify(result=query)
