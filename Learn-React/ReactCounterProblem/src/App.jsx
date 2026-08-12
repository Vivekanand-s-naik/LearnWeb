import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(1)
    let multipliedNum = count * 5;
    const handleMultiply = ()=>{
        setCount((count) => count + 1);


    }
    return (
        <div className="">
            <p>Main Initial Value : { count}</p>
            <button onClick={handleMultiply}>Multiply By-5</button>
            <p>multiplied Value : {multipliedNum}</p>
        </div>
    )
}

export default App
