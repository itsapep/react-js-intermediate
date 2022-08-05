import { LABEL } from "../../app/constant"
import AppButton from "../../component/appButton"
import AppFormInput from "../../component/appFormInput"

const StudentView = (props) => {
    const {handleSubmitStudent, newStudentValue, handleNewStudentChange, student, handleAddAgeClick, books} = props
    return (
        <div>
            <AppFormInput id='student' label={LABEL['Student.label'].value} value={newStudentValue} onValueChange={handleNewStudentChange}></AppFormInput>

            <AppButton handleClick={handleSubmitStudent} label={LABEL['Student.submit'].value}></AppButton>

            <div>
                <AppButton handleClick={handleAddAgeClick} label={LABEL['StudentAge.submit'].value}></AppButton>
            </div>
            <div>{student.name} {student.age}</div>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
        </div>
    )
}

export default StudentView;