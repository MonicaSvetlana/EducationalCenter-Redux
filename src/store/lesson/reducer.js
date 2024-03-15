import { lessonState } from "./state";
import { ADD_LESSON } from "./type";

export const lessonReducer = (state = lessonState, action) => {
  switch (action.type) {
    case ADD_LESSON:
      state.lessons = [...state.lessons, action.payload];
      break;
    default:
      break;
  }
  return { ...state };
};
