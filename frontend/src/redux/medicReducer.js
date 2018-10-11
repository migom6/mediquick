let initialState = {
  name: "Anonymous",
  age: 0,
  gender: false,
  symptoms: [],
  diagnosis: [],
  toggle: true,
  disease: "",
  issues: []
};
export default function medicReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.gender };
    case "SET_AGE":
      return { ...state, age: action.age };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_SYMPTOMS":
      return { ...state, symptoms: action.symptoms };
    case "SET_DIAGNOSIS":
      return { ...state, diagnosis: action.diagnosis };
    case "SET_TOGGLE":
      return { ...state, toggle: action.toggle };
    case "SET_ISSUES":
      return { ...state, issues: action.issues };
    default:
      return state;
  }
}
