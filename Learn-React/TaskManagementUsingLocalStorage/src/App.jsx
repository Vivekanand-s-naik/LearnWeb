import './App.css'
import { ToDoForm, TodoItem } from './Components';
import { ToDoContextprovider } from './Contexts'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState(()=>{
    const localTodos = localStorage.getItem('todos');
    return localTodos ? JSON.parse(localTodos) : []
  });

  const addTodos = useCallback((task) => {
    console.log("Task : ", task);
    return setTodos(prev => [task, ...prev])
  },[]);

  const editTodos = useCallback((id, task) => {
    setTodos(prev => prev.map((prevTask) => {
      console.log("prevTask", prevTask);
      return prevTask.id === id ? { ...prevTask, ...task } : prevTask;
    }))
  },[]);

  const deleteTodos = useCallback((id) => {
    return setTodos(prev => prev.filter((prevTask) => prevTask.id !== id))
  },[]);

  const toggleComplete = useCallback((id) => {
    return setTodos(prev => 
      prev.map(prevTask => {
        if (prevTask.id === id)
          return { ...prevTask, isCompleted:!prevTask.isCompleted }
        return prevTask
      }
    )
  )}, []);

  //Local Storage
  //Get Value at startup
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(todos);
  }, []);

  //setValue when Changes Occur
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  
  return (
    <ToDoContextprovider
      value={{
        todos,
        addTodos,
        editTodos,
        deleteTodos,
        toggleComplete
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((item)=> (<div key={item.id} className='w-full '><TodoItem todo={item} /></div>))}
          </div>
        </div>
      </div>
    </ToDoContextprovider>
  )
}

export default App
