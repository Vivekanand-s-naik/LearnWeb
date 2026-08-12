import { memo } from "react";

function Navbar({ item, setItem }) {
  console.log("Child Element Renders");
  return (
    <div>
      Navbar{item}
      <button onClick={()=>setItem()}>Click Me</button>
    </div>
  );
}

export default memo(Navbar);
