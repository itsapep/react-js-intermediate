import { STUDENT_ADD_AGE, STUDENT_CHANGE_NAME } from "../../../app/constant";

export function addAgeAction() {
    return{
        type : STUDENT_ADD_AGE
    }
}

export function changeNameAction(newName) {
    return {
        type : STUDENT_CHANGE_NAME,
        payload:{
            name : newName
        }
    }
}