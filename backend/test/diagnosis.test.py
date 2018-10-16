import unittest
import requests
import json
import sys
import os
sys.path.append(os.getcwd())
import env


class TestingDiagnosis(unittest.TestCase):
    #Checking whether Status is OK
    def test_status(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/diagnosis?symptoms=[233]&gender=male&year_of_birth=1988')
        print("Checking if status code is OK" )
        self.assertEqual(response.status_code, 200)

    #Checking whether given combinations of symptoms exists or not
    def test_combination(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/diagnosis?symptoms=[233,144]&gender=male&year_of_birth=1988')
        result = len(str(response.json()["results"]))
        print("Checking whether given combination of symptoms exists or not")
        self.assertGreater(result,2)
    
    #Checking if year of birth's validity
    def test_birthDate(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/diagnosis?symptoms=[233,144]&gender=male&year_of_birth=1988')
        result = str(response.json()["results"])
        print("Checking whether year_of_birth is valid or not")
        self.assertNotEqual(result, "year_of_birth is missing or invalid!")

    #Checking gender's validity
    def test_gender(self):
        response = requests.get(f'http://{env.HOST}:{env.PORT}/diagnosis?symptoms=[233,144]&gender=male&year_of_birth=1988')
        result = str(response.json()["results"])
        print("Checking whether gender is valid or not")
        self.assertNotEqual(result, "gender is missing or invalid!")

if __name__ == "__main__":
    unittest.main()
