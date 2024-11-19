import { combineReducers } from "redux";
import { reducer as globalReducer } from "./slice";

function createReducer(injectedReducers = {}) {
  const rootReducers = {
    global: globalReducer,
    ...injectedReducers,
  };

  return combineReducers(rootReducers);
}
export default createReducer;
