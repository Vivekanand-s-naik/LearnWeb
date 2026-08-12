import UserContext from "../Context/UserContext";
import { useContext } from "react";

function DataDisplay() {
    const {data} = useContext(UserContext);
    return (
    <div>
      {" "}
      <div>
        <h1>User Details</h1>
        <h3>Username : {data.name}</h3>
        <h3>Password : {data.password}</h3>
      </div>
    </div>
  );
}

export default DataDisplay;
