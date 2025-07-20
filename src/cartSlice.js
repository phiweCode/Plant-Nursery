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
                cat_plant_index: `${cat_index}${plant_index}`,
                category, 
                itemSubTotal:  parseFloat(plant.cost.replace(/[^0-9.]/g, ""))
            }

            state.push(cartItem)
        },
        incrementItemQuantity: (state, action) => {
            const item = state.find((item) =>
                item.plant_index === action.payload
            )

            if (item){ 
                item.cartItemQuantity += 1; 
                item.itemSubTotal = parseInt(item.cartItemCost.replace(/[^0-9.]/g, "")) * item.cartItemQuantity; 
            }
        },

        decrementItemQuantity: (state, action) => {
            const item = state.find(item => item.plant_index === action.payload)

            if (item && item.cartItemQuantity > 1){ 
                 item.cartItemQuantity -= 1; 

                 item.itemSubTotal = item.cartItemCost * item.cartItemQuantity; 
            }
        },
        removeCartItem: (state, action) => {
            const index = state.findIndex(item => item.plant_index === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
}) 

export const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + item.itemSubTotal, 0);


export const { addToCart, incrementItemQuantity, decrementItemQuantity, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer; 