import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: false
    },
    reducers: {
        login: (state, action) => {
            state.status = action.payload.status;
        }
    }
})
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer
  },
})

console.log("store sebelumnya: ",store.getState());
store.subscribe(() => {
  console.log("store saat ini: ",store.getState());
})

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 2}));
store.dispatch(loginSlice.actions.login({status: true}));
store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 4}));
