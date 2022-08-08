import { useDispatch, useSelector } from "react-redux";
import { updateHook } from "../redux/hookAction";
import { hookSelector } from "../redux/hookSelector";

export const HookComponent = () => {
    // when there's action that will be dispatched, useSelector will compare current state with previous state
    // it will re-render if both of them are different
    const num = useSelector(hookSelector);
    const dispatch = useDispatch()
    return (
        <>
            <div>{num}</div>
            <button onClick={() => dispatch(
                updateHook(`${Number(num) + 1}`)
            )}>
                Update
            </button>
        </>
    )
}