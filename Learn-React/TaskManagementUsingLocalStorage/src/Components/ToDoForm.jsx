import { useState, memo } from "react";
import { useToDoContext } from "../Contexts";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodos } = useToDoContext();

    const addTask = (e) => {
        e.preventDefault();
        if (!todo) return;

        addTodos({ id:Date.now(), task: todo, isCompleted: false });
        setTodo("");
    };

    const handleInputChange = (e) => {
        setTodo(e.currentTarget.value);
    }

    return (
        <form onSubmit={addTask} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={handleInputChange}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default memo(TodoForm);

