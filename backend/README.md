
# Backend Documenation
### Directory structure
```
backend
│   app.py
│   dbconfig.py
│   controller
│   utils
│   tests
|   env.py
```
- **First install all the python libraries**
```
pip install -r requirements.txt
```
- **Create an env.py by copying env.example.py and setting the required env variables**

### Routes
* get `/symptoms` - name of the user
* get `/diagnosis`
  ```body {
    symptoms
    gender
    year_of_birth
  }```
* get `/results`
```{
  disease
}```


### Tests
Tests are done using jests and can be found in [frontend/src/tests](https://github.com/migom6/mediquick/frontend/src/tests). ComponentName.test.js 
**To run tests**
```
npm run test
```
or
```
yarn test
```



