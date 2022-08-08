import useMyHook from "./useMyHook";

const MyHook = props => {
    const {result, status, add, min} = useMyHook()
    const ButtonGroup = () => (
        <>
            <button onClick={add}>+</button>
            <button onClick={min}>-</button>
        </>
    )
    return (
        <>
            {(status === 'idle' || status === 'failed') && <ButtonGroup/>}
            {status === 'loading' && <div>LOADING</div>}
            {status === 'success' &&
                <div>
                    result : {result}
                    <ButtonGroup/>
                </div>
            }
        </>
    );
};

export default MyHook;