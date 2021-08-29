import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";
import { tripReducer } from "./trip";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  trip: tripReducer,
});

export default rootReducer;
