import { createSlice, nanoid } from "@reduxjs/toolkit";

//Create and Export  A Slice
const initialState = {
  todos: [
    {
      id: nanoid(),
      task: "Any Task",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id:nanoid(),
                task:action.payload,
                completed:false,
            }
            state.todos.push(todo)
        },
        editTodo:(state, action)=>{
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, task:action.payload.task} : todo)
        },
        removeTodo:(state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete:(state, action) =>{
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, completed:!todo.completed} : todo)
        }
    }
});

//Export Slice Actions
export const {addTodo, editTodo, removeTodo, toggleComplete} = todoSlice.actions;

//Export Slice Reducers
export default todoSlice.reducer;