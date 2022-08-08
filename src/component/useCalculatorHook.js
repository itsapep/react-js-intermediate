import {useState} from 'react';

const useCalculatorHook = () => {
    const [display, setDisplay] = useState(0);
    const [expression, setExpression] = useState([]);
    
    const handleClick = (value) => {
        setDisplay(value);
        setExpression([...expression, value]);
    };

    const handleResult = () => {
        const result = expression
          .join("")
          .split(/(\D)/g) // A global search for non-digit characters
          .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value)) // A global search for digits
          .reduce((acc, value, index, array) => {
            switch (value) {
              case "+":
                return (acc = acc + array[index + 1]);
              case "-":
                return (acc = acc - array[index + 1]);
              case "x":
                return (acc = acc * array[index + 1]);
              case "÷":
                return (acc = acc / array[index + 1]);
              default:
                return acc;
            }
          });
        setDisplay(result);
        setExpression("");
    };

    return {
        display, expression, handleClick, handleResult
    };
};

export default useCalculatorHook;