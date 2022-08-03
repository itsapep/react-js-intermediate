import { STUDENT_ADD_BOOK } from "../../../app/constant";

export function addStudentBookAction(bookSelected) {
    return {
        type: STUDENT_ADD_BOOK,
        payload: {
            student: bookSelected.student,
            book: bookSelected.book
        }
    }
}