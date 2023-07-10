import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    login: false,
    cart: [{ id : 1, qty: 2 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
// store
const store = legacy_createStore(cartReducer);
console.log("store saat ini: ",store.getState()); 
// subscribe
store.subscribe(() => {
  console.log("store saat ini: ",store.getState());
})
// dispatch
store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 3,
  },
})
const store1 = {type: "ADD_TO_CART", payload: {id: 23, qty: 33}};
store.dispatch(store1);
