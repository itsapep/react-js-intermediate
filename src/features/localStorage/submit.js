import withStorage from "../../shared/WithStorage"

const SubmitButton = () => {
    return (
        <div>

        </div>
    )
}

export default withStorage(SubmitButton, (userName, favouriteFood) => {
    localStorage.setItem("userName", userName)
    localStorage.setItem("favouriteFood", favouriteFood)
})