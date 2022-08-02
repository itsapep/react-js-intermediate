import ActionType from "./reducer/global_action_type"

const globalState = {
    globalNumber : 0
}

const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.PLUS){
        return {
            ...state,
            globalNumber: state.globalNumber + 1
        };
    }
    if (action.type === ActionType.MINUS) {
        return {
            ...state,
            globalNumber: state.globalNumber - 1
        };
    }
    if (action.type === ActionType.TIMES2) {
        return {
            ...state,
            globalNumber: state.globalNumber * 2
        };
    }
    return state;
}

export default rootReducer;