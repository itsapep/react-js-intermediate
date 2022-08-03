import { LABEL } from "../../app/constant"
import AppButton from "../../component/appButton"
import AppFormInput from "../../component/appFormInput"

const StudentBookView = (props) => {
    const {handleSubmit, books, newBookValue, handleNewBookChange, student} = props
    return (
        <>
            <div>
                <h2>Book</h2>
                <div>
                    {student.name}
                </div>
                <AppFormInput id='book' label={LABEL['Book.label'].value} value={newBookValue} onValueChange={handleNewBookChange}></AppFormInput>
                <AppButton handleClick={handleSubmit} label={LABEL['StudentBook.submit'].value}></AppButton>
                <ul>
                    {/* {books.map((books) => <li key={books}>{books}</li>)} */}
                    {books.map(book => <li key={book}>{book}</li>)}
                </ul>
            </div>
        </>
    )
}

export default StudentBookView;