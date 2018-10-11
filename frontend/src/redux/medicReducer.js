let initialState = {
  name: "Anonymous",
  age: 0,
  gender: false,
  symptoms: [],
  diagnosis: [],
  toggle: false,
  disease: "malaria"
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
      return { ...state, diagnosis: action.toggle };
    default:
      return state;
  }
}
