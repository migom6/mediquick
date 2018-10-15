import unittest
import requests
import json
import sys
sys.path.append(os.getcwd())
import env

class TestingSymptoms(unittest.TestCase):
    #Checking whether status is Okay 
    def test_status(self):
        response = requests.get('http://'+env.HOST+':'+ env.PORT+'/symptoms')
        print("Checking whether status is Ok")
        self.assertEqual(response.status_code, 200)

    #Checking whether api call is working
    def test_length(self):
        response = requests.get('http://'+env.HOST+':'+ env.PORT+'/symptoms')
        print("Checking whether api call is working")
        result = len(str(response.json))        
        self.assertGreater(result,0) 

if __name__ == "__main__":
    unittest.main()
    
