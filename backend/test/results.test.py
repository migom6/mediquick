import unittest
import requests
import json
import sys
import os
sys.path.append(os.getcwd())
import env

class TestingResults(unittest.TestCase):

    #Checking whether Status is OK
    def test_status(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/results/?disease=cancer')
        print("Checking whether status is OK")
        self.assertEqual(response.status_code, 200)

    #Checking whether api is giving correct result
    def test_disease(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/results/?disease=cancer')
        print("Checking whether api is giving correct result")
        result = (response.json())["result"]["disease"]
        self.assertEqual(result, "cancer")

    #Checking whether disease exist or not
    def test_existence(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/results/?disease=cancer')
        print("Checking whether disease exist or not")
        self.assertNotEqual(response.status_code, 400)

if __name__ == "__main__":
    unittest.main()
    
