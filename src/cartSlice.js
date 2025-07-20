import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { plant, plant_index, cat_index, category } = action.payload;

            const cartItem = {
                cartItemName: plant.name,
                cartItemImageLink: plant.image,
                cartItemDescription: plant.description,
                cartItemCost: plant.cost,
                cartItemQuantity: 1,
                plant_index,
                cat_index,
                category
            } 

            state.push(cartItem)
        },
        incrementItemQuantity: (state, action) => {
           const item = state.find((item)=>
                item.plant_index === action.payload
            ) 
            console.log("index_passed", action.payload)
            console.log("Item found", item)
            if(item) item.cartItemQuantity += 1; 

            console.log("Item updated", item?.cartItemQuantity)
        }, 

        decrementItemQuantity: (state,action)=>{ 
            const item = state.find(item=> item.plant_index === action.payload) 

            if(item && item.cartItemQuantity > 1) item.cartItemQuantity -= 1; 
        }
    }
})

export const { addToCart, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer; 