import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";
import { tripReducer } from "./trip";
import { searchReducer } from "./search";
import { dateReducer } from "./date";
import { placeReducer } from "./place";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  trip: tripReducer,
  search: searchReducer,
  date: dateReducer,
  place: placeReducer,
});

export default rootReducer;
