import { combineReducers } from "redux";
import medicReducer from "./medicReducer";

const rootReducer = combineReducers({
  medic: medicReducer
});

export default rootReducer;
