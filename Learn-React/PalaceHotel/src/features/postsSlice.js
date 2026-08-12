import { createSlice } from "@reduxjs/toolkit";

const allPostsFromLocalStorage = JSON.parse(localStorage.getItem('allposts')) || [];


//Create SLice
const postsSlice = createSlice({
    name:'allPosts',
    initialState:{
        allPosts:allPostsFromLocalStorage || []
    },
    reducers:{
        initializeAllPosts: (state, action) =>{
            state.allPosts = action.payload;
        },
        addPosts: (state, action)=>{
            state.allPosts.push(action.payload);
        },
        updatePost: (state, action) => {
            const targetIndex = state.allPosts.findIndex(item => item.id === action.payload.id)
            if (targetIndex !== -1)
                state.allPosts[targetIndex] = action.payload;
        },
        deletePost: (state, action) =>{
            state.allPosts = state.allPosts.filter( item =>item.$id === action.payload.$id ? false : true);
        },
        getPostByTitle: (state, action) =>{
            return state.allPosts.find(post => post.postTitle === action.payload) || null;
            }
        },
        clearPosts:(state) =>{
            state.allPosts = [];
        }

    }
    
)

//Export Actions 
export const {
    addPosts, updatePost, deletePost, clearPosts, initializeAllPosts, getPostByTitle
} = postsSlice.actions;

//Export Reducer
const postsReducer = postsSlice.reducer;
export default postsReducer;