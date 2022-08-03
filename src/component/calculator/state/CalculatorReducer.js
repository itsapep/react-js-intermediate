import ActionType from "./CalculatorAction"

const initialState = {
    result: 0
}

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADDITION:
            return {
                ...state,
                result: action.num1 + action.num2
            }
        case ActionType.SUBSTRACTION:
            return {
                ...state,
                result: action.num1 - action.num2
            }
        case ActionType.MULTIPLICATION:
            return {
                ...state,
                result: action.num1 * action.num2
            }
        case ActionType.DIVISION:
            return {
                ...state,
                result: action.num1 / action.num2
            }
        default:
            return state;
    }
}

export default CalculatorReducer;