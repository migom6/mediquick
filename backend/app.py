import time
import requests
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from flask import Flask, jsonify, request
from flask_cors import CORS
from controller.symptoms import symptoms
from controller.results import results
from controller.diagnosis import diagnosis
from utils.generatetoken import generatetoken
from utils.scraper import getdetails_disease
from dbconfig import dbconfig
import env

# initialising headless firefox instance,token, database
options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(firefox_options=options,
                           executable_path=env.FIREFOX_DRIVER)
print("Firefox Headless Browser Invoked")
token = generatetoken()
print("Created token", token[:8])
db, dbconnected = dbconfig(env.DB_NAME, env.DB_HOST, env.DB_PORT, env.DB_USER, env.DB_PASS)
if(dbconnected):
    print("connected to database")
else:
    print("not connected to database, no caching of result")

# middlewares
app = Flask(__name__, static_url_path='/')
CORS(app)
# routes


@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/symptoms')
def get_all_symptoms():
    res = symptoms(token)
    return res


@app.route('/diagnosis')
def get_all_diagnosis():
    res = diagnosis(token)
    return res


@app.route('/results/')
def getResults():
    res = results(db, dbconnected, driver)
    return res


@app.route('/alive')
def hello():
    return "Alive!!!"


@app.route('/quit')
def quitfirefox():
    driver.quit()
    return("successfully quit gecko")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True,port=5002)
