import { configureStore } from "@reduxjs/toolkit";
import plantReducer from './plantSlice' 
import cartReducer from './cartSlice'

export default configureStore({ 
    reducer: { 
        plant: plantReducer, 
        cart: cartReducer,
    }
})