// we need redux
const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    name: 'Apep',
    age: 22
}

// reducer
// action: return state
const rootReducer = (state = initialState, action) => {
    return state
}

// store
const store = createStore(rootReducer);
console.log(store.getState());