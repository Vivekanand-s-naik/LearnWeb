import { incrementCounter, decrementCounter, resetCounter } from "./features/counter/counterSlice"
import { incrementMsg, decrementMsg, resetMsg } from "./features/message/messageSlice";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

function App() {
    const message = useSelector(state => state.message.msg);
    const counter = useSelector(state => state.counter.counter.value);
    console.log("counter : ", counter);
    console.log("message : ", message)
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="p-3 border-2 border-black">
                {counter}
                {message}
            </div>
            <div className="flex flex-col justify-center items-center gap-5 bg-red-200 h-1/2 w-1/2 [&>button]:h-1/5 [&>button]:px-3 [&>button]:py-2 [&>button]:border-4 [&>button]:border-black [&>button]:w-1/2 [&>button]:bg-blue-500 [&>button]:rounded-3xl">
                <button onClick={() => {
                    dispatch(incrementCounter());
                    dispatch(incrementMsg());
                }}>
                    Increment
                </button>
                <button onClick={() => {
                    dispatch(decrementCounter());
                    dispatch(decrementMsg());
                }}>
                    Decrement
                </button>
                <button onClick={() => {
                    dispatch(resetCounter());
                    dispatch(resetMsg());
                }}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default App