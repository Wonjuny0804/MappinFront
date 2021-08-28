import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export default rootReducer;
