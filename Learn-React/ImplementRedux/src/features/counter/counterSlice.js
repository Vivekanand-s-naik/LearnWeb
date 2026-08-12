import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter:{
        value: 0,
        type : 'Integer'
    }
}

const counterSlice = createSlice({
    name:'counter',
    initialState: initialState,
    reducers:{
        incrementCounter(state){
            state.counter.value++;
        },
        decrementCounter(state){
            state.counter.value--;
        },
        resetCounter(state){
            state.counter.value = 0;
        }
    }
});

//Export  Actions
export const {
    incrementCounter, decrementCounter, resetCounter
} = counterSlice.actions;

//Export Reducers
const counterReducer  = counterSlice.reducer; 
export default counterReducer;
