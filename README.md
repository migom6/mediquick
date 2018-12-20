# <a id="MediQuick" href="https://mediquick.netlify.com">MediQuick</a>
<a id="MediQuick" href="https://mediquick.netlify.com">Live Demo</a> | <a id="MediQuick" href="https://www.youtube.com/watch?v=1zHoF8BFBVo">Youtube Video Demo</a> 


### Table Of Content

1. [Goal](#goal)
1. [MediQuick Features](#mediquick-features)
1. [Dependencies and Technologies Used](#dependencies-and-technologies-used)
1. [Installation](#installation)
1. [Documentation](#documentation)
1. [Testing](#testing)
1. [Contact](#contact)


## Goal

**The goal** is to find a list of diagnosis from a list of medical symptoms, and also give out proper suggestion for treatments and specialist for a given medical condition/diagnosis.

**This project is an MVP** and is solely made for the purpose of competing for getting selected in hackercamp 2019, innovaccer. ** Update: I was not selected. **

## MediQuick Features
MedicQuick is a web app, which is use to suggest users possible treatments from user input information. 

![](https://github.com/migom6/mediquick/blob/master/assets/main.png)

 - **Full-Text-Search:** Search issues and symptoms using natural language *eg: I am having fever and headache.*
 - **Drop Down:** Get list of all available symptoms and issues from where you can multi select. 
 - **Auto-complete list:** As you type you can see the list of possible symptoms. 
 - **Diagnosis** For some selected combination of symptoms find the possible diagnosis.
 - **Treatments**: Get treatment suggestions when you select a particular diagnosis.
 - **Caching data** The treatment data that has been scraped is saved in a database, so that the responses of the subsequent requests for the same diagnosis is faster.

## Dependencies and Technologies Used
Mediquick comprises of frontend and backend web technologies.
![](https://github.com/migom6/mediquick/blob/master/assets/tech-logo.png)
1. ### Frontend
    1. React(UI Library)
    2. Emotion(CSS in JS)
    3. Redux + Redux Thunk(State UI)
    4. Jest(Unit testing for UI)
2. ### Backend
    1. Flask(to create routes)
    3. PyMongo(to save data)
    4. mLabs(online cloud mongodb service)
    5. Python unit test module
    6. Selenium with firefox driver(web scraping in javascript enabled sites)
    
## Installation
- First clone this repo </br>
  ```git clone https://github.com/migom6/mediquick.git```</br>
- Download and install the firefox gecko driver [here](https://github.com/mozilla/geckodriver/releases)</br>
- Create a MongoDb database locally or from [mLabs](https://mlab.com).
- Install the dependencies of frontend
```
cd frontend
npm install
```
- Install the dependencies of backend
```
cd backend
pip install -r requirements.txt
```
- Set the environment variables in .env file, check [.env.example](https://github.com/migom6/mediquick/blob/master/.env.example)
- source the .env
```
source .env
```
- A [Makefile](https://github.com/migom6/mediquick/blob/master/Makefile) is setup up to help in the installation. <br />
 - **make build-frontend** This builds the react app and produces a build folder.
 - **make serve** This starts the server and the web app can be accesed in the browser.
 - **make test-backend** This is use to test backend code.
 - **make test-frontend** This is use to test the frontend code.
 - **make netlify** This publishes the frontend to netlify. [Check netlify.toml](https://github.com/migom6/mediquick/blob/master/netlify.toml)


## Documentation
 Documentation of Frontend and Backend are available in [/frontend/README.md](https://github.com/migom6/mediquick/blob/master/frontend/README.md) and [/backend/README.md](https://github.com/migom6/mediquick/blob/master/backend/README.md) respectively. 
 

## Testing
  Tests are written using Jest (frontend) and unit test python (backend).
  The test are written in [/frontend/tests](https://github.com/migom6/mediquick/tree/master/frontend/test) and [/backend/tests](https://github.com/migom6/mediquick/tree/master/backend/test). <br/>
  **To run tests for frontend** </br>
  ```make test-frontend``` <br />
       **and** <br />
   **To run tests for backend** </br>
  ```make test-backend```

## Contact

Find me on [github](https://www.github.com/migom6/) or contact me [via email](mailto:migom6@gmail.com).

