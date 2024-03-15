import { ADD_STUDENT, DELETE_STUDENT} from "./type";

export const addStudent = (data) => ({ type: ADD_STUDENT, payload: data });
export const delStudent = (id) => ({ type: DELETE_STUDENT, payload: id });
