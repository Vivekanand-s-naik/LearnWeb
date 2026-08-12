import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState();
  const incrementCounter = ()=>{
    console.log("Increment Counter : ", Math.random());
    if (counter < 20){
      setCounter(counter + 1)
      setMessage(`counter Value :${counter}`);
    }
    else{
      setMessage("MaximumCounterReached");
    }
  };
  const decrementCounter = ()=>{
    console.log("Decrement Counter : ", Math.random());
    if (counter > 0 ){
      setCounter(counter - 1);
      setMessage(`counter Value :${counter}`);
    }
    else{
      setMessage("MinimumCounterReached");
    }
  };
  return (
    <div>
      <h1>Hello Coder's Paradise</h1>
      <h3>{message}</h3>
      <button
      onClick={incrementCounter}
        style={{
          color: 'green',
          backgroundColor: 'azure'
        }}>
          Increment
      </button>
      <button
      onClick={decrementCounter}
        style={{
          color: 'red',
          backgroundColor: 'azure'
        }}>
          Decrement
      </button>
    </div>
  )
}

export default App
