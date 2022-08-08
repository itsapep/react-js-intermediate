export const ButtonForm = ({label, isLoading, handleSaveProduct}) => {
    return (
        <button disabled={isLoading} onClick={handleSaveProduct}>
            {label}
        </button>
    )
}