
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
  body {
    symptoms
    gender
    year_of_birth
  }
* get `results`
{
  disease
}

### Container Components
* `<App / >` - This file containes two components and routes (react-router), `<Home />` and `<Medicare />`    
* `<Diagnosis />` - This component manages states for `<Diseases />`  
* `<Diseases />` - Renders a list of presentational diagnosis cards `<DiseaseCards />` 
* `<Home />` - Parent component for `<Header />` , `<Personal />` , `<SearchBox />` , `<GoButton />`  and `<Diagnosis />`
* `<Medicare />` - Parent component of `<MediCard>`, fetches data of possible treatments
* `<SearchBox />` - Parent component of `<AutoSearch />` and `<ListSearch />` mangaes toggle between the two components.

### Utils
**Contains utility functions** <br />
* `AutoSearch` - constructor(input, vocab), predict() returns type:issues
          
```javascript
import AutoSearch from 'utils/Autosearch'
let input_text = ["I", "am", "having", "fever", "and", "backpain"]
const autosearch = new AutoSearch(input_text, list_symptoms);
let issues = autosearch.predict()
```
> issues <br />
> ["fever", "back pain"]

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



