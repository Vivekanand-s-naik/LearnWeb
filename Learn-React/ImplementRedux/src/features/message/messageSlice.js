import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    errorMsg: ""
}

export const messageSlice = createSlice({
    name: "msgSlice",
    initialState: initialState,
    reducers: {
        incrementMsg(state, action){
            state.msg = action.payload || "Counter is Incremented";
        },
        decrementMsg(state, action){
            state.msg = action.payload || "Counter is Decremented";
        },
        resetMsg(state, action){
            state.msg = action.payload || "Counter Reset";
        },
        ErrorMsg(state, action){
            state.errorMsg = action.payload || "Error Occured";
        }
    }
});


//Export Actions
export const {
    incrementMsg, decrementMsg, resetMsg
} = messageSlice.actions;

//Export Reducer
const messageReducer = messageSlice.reducer;
export default messageReducer;