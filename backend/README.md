
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

### Treatment schema
The treatment data for a particular disease is scraped over google search result page. The knowledge graph of google is scraped.
```javascript
{
  dis_id: 343;
  name: cancer;
  treatment_types: [
    {
      type: 'medications',
      options: [
        {
          name: anti-parasite,
          description: kill parasites,
        },
        {
          name: 'antibiotics',
          description: 'stop growth or kill bacteria'
        }
      ]
    }
  ]
}
```

### Routes
* get `/symptoms` - Get list of all symptoms

* get `/diagnosis` - Get list of diagnosis 

```
  body {
    symptoms
    gender
    year_of_birth
  }
```
* get `/results` - Get treatment results given a particular diagnosis

```
  body {
    disease
  }
```


### Tests
Tests are done using python unit test can be found in [backend/src/tests](https://github.com/migom6/mediquick/tree/master/backend/test). 
**To run tests**
```
make test-backend 
```




