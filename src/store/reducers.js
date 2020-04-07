import { combineReducers } from "redux";
import { city } from "./reducers/city";

const rootReducer = combineReducers({
  city,
});

export default rootReducer;
