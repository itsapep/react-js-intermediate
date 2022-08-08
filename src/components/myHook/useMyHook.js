import {useEffect, useState} from 'react';
import { useDeps } from '../../context/depContext';
import useAsync from "../../shared/UseAsync";

const useMyHook = () => {
    const [result, setResult] = useState('');
    const [counter, setCounter] = useState(0);
    const {moreEffectService} = useDeps();
    const {execute, status, value, error} = useAsync();

    // right way
    useEffect(() => {
        onExec()
    }, [counter]);
    useEffect(() => {
        setResult(value)
        if (status === 'failed') {
            window.alert(error)
        }
    }, [value, status]);

    const add = () => {
        setCounter(counter + 1)
        // bad way
        // onExec()
        // setResult(value)
    }
    const min = () => {
        setCounter(counter - 1)
        // bad way
        // onExec()
        // setResult(value)
    }
    const onExec = async () => {
        if (counter !== null) {
            await execute(() => moreEffectService.doPrint(counter))
        }
    }
    return {
        result, status, add, min
    };
};

export default useMyHook;