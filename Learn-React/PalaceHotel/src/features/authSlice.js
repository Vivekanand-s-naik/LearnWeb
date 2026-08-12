import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogged:false,
        userData:null
    },
    reducers:{
        loggin(state, action){
            state.isLogged = true,
            state.userData = action.payload
        },
        logout(state){
            state.isLogged = false,
            state.userData = null
        }
    }
});
const authReducer = authSlice.reducer;

//Export The Actions (That areused to edit or update the states)
export const { loggin, logout} = authSlice.actions;

//Export it for the store so that store4 will get awarness and permit for the updates of states only from these reducers 
export default authReducer; 