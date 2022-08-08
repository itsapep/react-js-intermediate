import { useEffect, useState } from "react";
import moreEffectService from "../services/moreEffectService";

const MoreEffect = () => {
    const { doPrint } = moreEffectService();
    const [result, setResult] = useState();
    // Allow a functional component to use lifecycle methods
    useEffect(() => {
        setResult(doPrint('1'));
        console.log('1');
    },[])
    return(
        <>
            <h1>Print: {result}</h1>
        </>
    )
}

export default MoreEffect;