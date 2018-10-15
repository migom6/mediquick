import time
def getdetails_disease(driver, disease):
  try:
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
    res = {"disease" : disease}
    treatment_types = []
    for i in range(len(acc)):
      acc[i].find_element_by_tag_name('span').click()
      t = acc[i].text.split('\n')
      temp = {}
      temp["type"] = t[0]
      options = []
      for i in range(1,len(t),2):
        k = t[i]
        v = t[i+1]
        temp1 = {}
        temp1["title"] = k
        temp1["description"] = v
        options.append(temp1)
      temp["options"] = options
      treatment_types.append(temp)
    res["treatment_types"] = treatment_types
    return (res , 200) 
  except: 
    return ("No results found", 400)