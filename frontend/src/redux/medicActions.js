const axios = require("axios");

export function set_gender(gender) {
  return {
    type: "SET_GENDER",
    gender
  };
}

export function set_age(age) {
  return {
    type: "SET_AGE",
    age
  };
}
export function set_name(name) {
  return {
    type: "SET_NAME",
    name
  };
}

export function set_toggle(toggle) {
  return {
    type: "SET_TOGGLE",
    toggle
  };
}
export function set_issues(issues) {
  return {
    type: "SET_ISSUES",
    issues
  };
}

export function set_disease(disease) {
  return {
    type: "SET_DISEASE",
    disease
  };
}

export function set_symptoms() {
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_URL || ""}/symptoms`)
      .then(function(response) {
        dispatch(fetch_success_symptoms(response.data.results));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function fetch_success_symptoms(symptoms) {
  return {
    type: "SET_SYMPTOMS",
    symptoms
  };
}

export function set_diagnosis() {
  return (dispatch, getState) => {
    let presentState = getState();
    let { issues, age, gender } = presentState.medic;
    let symptoms = [];
    for (let i = 0; i < issues.length; i++) {
      symptoms.push(issues[i].value);
    }
    symptoms = symptoms + "";
    symptoms = "[" + symptoms + "]";
    let year_of_birth = new Date().getFullYear() - age;
    let body = {
      params: {
        symptoms: symptoms,
        year_of_birth,
        gender
      }
    };
    axios
      .get(`${process.env.REACT_APP_URL || ""}/diagnosis`, body)
      .then(function(response) {
        dispatch(fetch_success_diagnosis(response.data.results));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

function fetch_success_diagnosis(diagnosis) {
  return {
    type: "SET_DIAGNOSIS",
    diagnosis
  };
}
