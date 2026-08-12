/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
        'id':Date.now(),
        'task':'',
        'isCompleted':false            
        },
    ],
    addTodos:(task)=>{},
    editTodos:(id, task)=>{},
    deleteTodos:(id)=>{},
    toggleComplete:(id)=>{},

});

export const ToDoContextprovider = ToDoContext.Provider;

export function useToDoContext(){
    return useContext(ToDoContext);
}