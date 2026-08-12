import './App.css';
import Message from './Message';
function App() {
  return (
    <>
      <h1>Coders Paradise</h1>
      <pre>
        {`
        What i learnt Till Now
        what is react Components
        what is markup
        Conditionals rendering
        what is export Default 
        what and Why the need to vite and parcel
        how to nest Components
        display the Js in JSK using {} braces
        `}
      </pre>
      <Message />
    </>
  );
}

export default App;
