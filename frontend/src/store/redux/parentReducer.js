import { combineReducers } from "redux";
import { langDataReducer } from "./slices/langSlice";

const parentReducer = combineReducers({
  langData: langDataReducer,
});

export default parentReducer;
