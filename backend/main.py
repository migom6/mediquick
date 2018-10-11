from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import time
from flask import Flask, jsonify

options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(firefox_options=options, executable_path="/usr/bin/geckodriver")
print("Firefox Headless Browser Invoked")

app = Flask(__name__)

def getdetails(driver, disease):
  driver.get('http://google.com/search?q='+disease)
  try:
      k = driver.find_element_by_css_selector("#knowledge-health__higf")
      k.find_elements_by_tag_name('a')[0].click()
      time.sleep(1)
  except:
    pass
  driver.find_element_by_css_selector(".knowledge-health__tab-treatment").click()
  time.sleep(1)
  acc = driver.find_elements_by_css_selector("#hixcs g-accordion-expander") 
  time.sleep(1)
  res = []
  for i in range(len(acc)):
    acc[i].find_element_by_tag_name('span').click()
    res.append(acc[i].text)
  return res

@app.route('/')
def hello():
    return "Alive!! use /results/<disease_name>"

@app.route('/quit')
def quitfirefox():
    driver.quit()
    return("Successfully quit")
@app.route('/results/<disease>')
def getResults(disease):
    print("Fetching results for "+disease)
    try:
      res = getdetails(driver, disease)
      print("Got results in server for "+disease)
      return jsonify(results=res)
    except:
      return "No results!"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
