import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [passLength, setPassLength] = useState(10);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useCharacters, setUseCharacters] = useState(false);
  const [password, setPassword] = useState("");


  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    let pass = "";
    if (useNumbers) str += "1234567890";
    if (useCharacters) str += "`!@#$%^&*()_+{}:";
    for (let index = 1; index <= passLength; index++) {
      let pos = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(pos);
    }
    setPassword(pass);
  }, [passLength, useNumbers, useCharacters, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [passLength, useNumbers, useCharacters, generatePassword]);
  
  const PasswordRef = useRef(null);
  const copyfunction = ()=>{
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  
  return (
    <div className="bg-green-500 h-screen grid grid-rows-2">
      <h1 className="text-center font-extrabold text-6xl pt-28 ">
        Password Generator
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-20 h-full pb-20">
        <div className="">
          <label htmlFor="passCOntainer">Password : </label>
          <input type="text" id="passCOntainer" value={password} readOnly ref={PasswordRef} />
          <button onClick={copyfunction}>Copy Password</button>
        </div>
        <input
          type="range"
          id="mySlider"
          min="0"
          max="30"
          step={1}
          value={passLength}
          onChange={(e) => setPassLength(e.target.value)}
          className="inline-block cursor-pointer"
        />

        <div className="flex flex-wrap justify-between gap-10 [&>div]:flex [&>div]:justify-around [&>div]:items-center">
          <div className="">
            <input
              type="checkbox"
              id="allowNumbers"
              onChange={() => setUseNumbers((prev) => !prev)}
              defaultChecked={useNumbers}
            />
            Numbers
          </div>
          <div className="">
            <input
              type="checkbox"
              id="allowCharacters"
              onChange={() => setUseCharacters((prev) => !prev)}
              defaultChecked={useCharacters}
            />
            Characters
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
