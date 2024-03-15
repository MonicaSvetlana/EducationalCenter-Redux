import { studenState } from "./state";
import { ADD_STUDENT, DELETE_STUDENT } from "./type";

export const studentReducer = (state = studenState, action) => {
  switch (action.type) {
    case DELETE_STUDENT:
      state.students = state.students.filter((elm) => elm.id !== +action.payload);
      break;
    case ADD_STUDENT:
      state.students = [...state.students, action.payload];
      break;
    default:
      break;
  }
  return { ...state };
};
