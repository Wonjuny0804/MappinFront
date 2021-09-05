import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";
import { tripReducer } from "./trip";
import { searchReducer } from "./search";
import { dateReducer } from "./date";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  trip: tripReducer,
  search: searchReducer,
  date: dateReducer
});

export default rootReducer;
