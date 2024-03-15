import { combineReducers } from "redux";
import { studentReducer } from "./student/reducer";
import { lessonReducer } from "./lesson/reducer";

export const reducers = combineReducers({
  studentReducer,
  lessonReducer,
});
