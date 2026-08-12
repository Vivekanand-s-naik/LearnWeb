import { useSelector } from "react-redux"
import TodoItem from "./ToDoItem";


//Get the todoss from the redux state and perform operations
function Todos() {
    const todos = useSelector(state => state.todos);
    console.log(todos)
    return (
        <>
        {todos.map(todo=><TodoItem todo={todo} key={todo.id}/>)}
        </>
    )
}

export default Todos