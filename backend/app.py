import time
import requests
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from flask import Flask, jsonify, request
from flask_cors import CORS
from utils.generatetoken import generatetoken
from utils.scraper import getdetails_disease
from dbconfig import dbconfig
DB_NAME = "mediquick" 
DB_HOST = "ds125693.mlab.com"
DB_PORT = 25693
DB_USER = "migom6"
DB_PASS = "migom6"

#initialising headless firefox instance,token, database
options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(firefox_options=options, executable_path="/usr/bin/geckodriver")
print("Firefox Headless Browser Invoked")
token = generatetoken()
print("Created token", token[:8])
db, dbconnected = dbconfig(DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS)
if(dbconnected):
    print("connected to database")
else:
    print("not connected to database, no caching of result")

#middlewares
app = Flask(__name__, static_url_path='/')
CORS(app)
#routes
@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/symptoms')
def get_all_symptoms():
    url = "https://healthservice.priaid.ch/symptoms?token="+token+"&language=en-gb"
    try:
        res = requests.get(url)
        res = res.json()
        return jsonify(results=res)
    except:
        return "Bad Request" , 400

@app.route('/diagnosis')
def get_all_diagnosis():
    symptoms = request.args.get("symptoms")
    gender = request.args.get("gender")
    year_of_birth = request.args.get("year_of_birth")
    url = "https://healthservice.priaid.ch/diagnosis"
    data = {"token": token,
            "language":"en-gb",
            "gender": gender,
            "year_of_birth":year_of_birth,
            "symptoms":symptoms}
    try:
        res = requests.get(url, data)
        res = res.json()
        return jsonify(results=res)
    except:
        return "Bad Request" , 400

@app.route('/results/')
def getResults():
    disease = request.args.get("disease")
    if(dbconnected):
        query = db.Treatments.find_one({"disease": disease})
        del query["_id"] #needed to remove mongodb defauld ObjectID key, because it can't be serialised
        if(query is None):
            print("Fetching results via scraping for "+disease)
            res = getdetails_disease(driver, disease)
            print(res)
            print("Showing results via scraping for "+disease)
            db.Treatments.insert_one(res)
            print("Saved in database")
            return jsonify(results=res)
        else:
            print("Showing results from database")
            return jsonify(results=query)
    else:
        print("Showing results via scraping for "+disease)
        res = getdetails_disease(driver, disease)
        return jsonify(results=res)
  
    
     
@app.route('/alive')
def hello():
    return "Alive!!!"

@app.route('/quit')
def quitfirefox():
    driver.quit()
    return("successfully quit gecko")



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
