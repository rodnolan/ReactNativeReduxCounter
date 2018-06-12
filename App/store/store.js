import { createStore } from 'redux'

export const counter = (state = 0, action) => {
  let amt = action.payload;
  switch (action.type) {
  case 'INCREMENT':
    return state + amt;
  case 'DECREMENT':
    return state - amt;
  case 'RESET':
    return 0;
  default:
    return state;
  }
}

let store = createStore(counter);

export default store;