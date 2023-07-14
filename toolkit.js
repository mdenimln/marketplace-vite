import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCard = createAction("ADD_TO_CART");
const login = createAction("LOGIN");
// reducer
const cartReducer = createReducer(
    [], (builder) => {
        builder.addCase(addToCard, (state, action) => {
            state.push(action.payload);
        })
    } 
)
const loginReducer = createReducer(
    {status: false},
    (builder) => {
        builder.addCase(login, (state, action) => {
            state.status = action.payload.status;
        })
    }
)
// store
const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer
    }, 
})

console.log("store sebelumnya: ",store.getState());

// subscribe
store.subscribe(() => {
    console.log("store saat ini: ",store.getState());
})

// dispatch
store.dispatch(addToCard({id: 1, qty: 2}));
store.dispatch(login({status: true}));