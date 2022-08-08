export const InputForm = ({name, label, value, handleOnInput}) => {
    return (
        <>
            <label>{label}</label>
            <input name={name}
                type='text'
                value={value}
                onChange={handleOnInput}/>
        </>
    )
} 