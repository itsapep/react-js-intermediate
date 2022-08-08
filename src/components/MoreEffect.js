import { useEffect, useState } from "react";
import { useDeps } from "../context/depContext";
import moreEffectService from "../services/moreEffectService";

const MoreEffect = () => {
    const {moreEffectService : {doPrint}} = useDeps();
    const [result, setResult] = useState('');
    const [id, setId] = useState('10');
    // Allow a functional component to use lifecycle methods
    // useEffect will be called when there's change in id
    useEffect(() => {
        setResult(doPrint(id));
        console.log('1');
        // deps will control when to do useEffect
    },[id])
    return(
        <>
            {/* <input type='text' value={id} onChange={(e) => {
                setId(e.target.value)
            }}></input> */}
            <button onClick={() => setId('10')}>Click</button>
            <h1>Print: {result}</h1>
        </>
    )
}

export default MoreEffect;