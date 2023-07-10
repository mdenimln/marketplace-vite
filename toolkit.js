import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCard = createAction("ADD_TO_CART");

const cartReducer = createReducer(
    [], (builder) => {
        builder.addCase(addToCard, (state, action) => {
            state.push(action.payload);
        })
    } 
)

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
console.log("store saat ini: ",store.getState());
store.subscribe(() => {
    console.log("store saat ini: ",store.getState());
})

store.dispatch(addToCard({id: 1, qty: 2}));