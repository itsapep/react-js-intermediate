import CalculatorReducer from "../component/calculator/state/CalculatorReducer";

const { createStore } = require("redux");

const store = createStore(
    CalculatorReducer,
)

export {store};