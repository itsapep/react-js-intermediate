import { combineReducers } from "redux";
import { studentReducer } from '../features/student/state/StudentReducer'
import { studentBookReducer } from "../features/studentBook/state/studentBookReducer";

export function rootReducer(){
    return combineReducers({
        studentReducer,
        bookReducer: studentBookReducer,
    })
}
