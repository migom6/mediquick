# Frontend Documentation
### Directory structure
```
frontend
│   public
│   .eslintrc
│   .env
│
└───src
│   │   container
│   │   presentational
│   │   redux  
│   │   utils
```
**To build the react app, first fill the details in the .env file and then run**
```
yarn install
yarn build
```
or
```
npm install
npm run build
```
This will create a build folder with index.html, which can be served.
The entry point of the project is **src**. <br/>
**The React components are divided into two categories**
* Container (These are the components responsible for creating actions for redux)
* Presentational (These are components with less data state logic)

### Redux
This project uses redux for managing state of the app and uses redux-thunk for asynchronous calls with redux. <br/>
**The initial state of the store is as follows**
```javascript
let initialState = {
  name: "Anonymous",
  age: 0,
  gender: false,
  symptoms: [],
  diagnosis: false,
  toggle: true,
  disease: "",
  issues: []
};
```
* `name` - name of the user
* `age` - age of the user
* `symptoms` - list of all available symptoms
* `gender` - gender of the user
* `diagnosis` - list of diagnosis from a selected combination of symptoms
* `toggle` - toggle AutoSearch or ListSearch
* `disease` - selected disease by the user
* `onChange` - subscribe to change events
* `issues` - list of selected symptoms by the user

### Container Components
* `<App / >` - This file containes two components and routes (react-router), `<Home />` and `<Medicare />`    
* `<Diagnosis />` - This component manages states for `<Diseases />`  
* `<Diseases />` - Renders a list of presentational diagnosis cards `<DiseaseCards />` 
* `<Home />` - Parent component for `<Header />` , `<Personal />` , `<SearchBox />` , `<GoButton />`  and `<Diagnosis />`
* `<Medicare />` - Parent component of `<MediCard>`, fetches data of possible treatments
* `<SearchBox />` - Parent component of `<AutoSearch />` and `<ListSearch />` mangaes toggle between the two components.

### Presentational Components
* `<AutoSearchBox / >` - This file containes two components and routes (react-router), `<Home />` and `<Medicare />`    
* `<DiseaseCard />` - This component manages states for `<Diseases />` , displays information about a disease.  
* `<GoButton />` - Button to start fetching diagnosis from selected issues.
* `<Header />` - contains logo and about, help links.
* `<ListSearchBox />` - An autocomplete drop down list of all available symptoms.
* `<LoadingCard />` - Loading card if when data is being fetch.
* `<MedicalCare />` - A card to display treatment data.
* `<Personal />` - A form for user input name, age, gender.
* `<ShowMoreDetail />` - Displays details about issues.
* `<Toggle />` - Toggle component to toggle on/off AutoSearchBox and ListSearchBox

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



