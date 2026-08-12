import { useState } from "react";
import ToDoList from "./components/ToDoList";
import {ListItemsContext} from "./Context/ListItemsContext";

function App() {
  const [task, setTask] = useState("");
  const handleInputChange = (e) => {
    setTask(e.currentTarget.value);
  };
  const [ListItems, setListItems] = useState([]);
  const addTask = ()=>{
    setListItems([...ListItems, task]);
    setTask('')
  }
  return (
    <ListItemsContext.Provider value={{ListItems, setListItems}}>
    <div className="h-screen w-screen bg-blue-950 ">
      <div className="py-6">
        <div className=" h-[10%] w-200 mx-auto overflow-hidden rounded-2xl mb-5">
          <input
            type="text"
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={handleInputChange}
            disabled={false}
            className="w-[90%] p-3 h-12.5 bg-[#424E64]"
          />
          <button 
          type="button" 
          className="w-[10%] p-3 h-12.5 bg-[#149E48]" 
          onClick={addTask}
          >
            Add
          </button>
        </div>
        <ToDoList />
      </div>
    </div>
    </ListItemsContext.Provider>
  );
}

export default App;
