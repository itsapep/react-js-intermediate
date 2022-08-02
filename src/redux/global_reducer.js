import ActionType from "./reducer/global_action_type";

const globalState = {
  globalNumber1: 0,
  globalNumber2: 0,
  globalResult: 0,
};

//reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.CHANGENUM1:
      return {
        ...state,
        globalNumber1: action.Value,
      };
    case ActionType.CHANGENUM2:
      return {
        ...state,
        globalNumber2: action.Value,
      };
    case ActionType.PLUS:
      return {
        ...state,
        globalResult: state.globalNumber1 + state.globalNumber2,
      };
    case ActionType.MINUS:
      return {
        ...state,
        globalResult: state.globalNumber1 - state.globalNumber2,
      };
    case ActionType.DIVIDE:
      return {
        ...state,
        globalResult: state.globalNumber1 / state.globalNumber2,
      };
    case ActionType.MULTIPLE:
      return {
        ...state,
        globalResult: state.globalNumber1 * state.globalNumber2,
      };
    default:
      return state;
  }
};

export default rootReducer;