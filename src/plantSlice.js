import { createSlice } from "@reduxjs/toolkit"; 
import useFetch  from './hook/useFetch'; 

const [data] = useFetch(); 

const initialState = data; 

//console.log(initialState)

const plantSlice = createSlice({ 
    name: "plant", 
    initialState,
    reducers: { 

    }
    
}) 

export default plantSlice.reducer; 