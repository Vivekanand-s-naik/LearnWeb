import UserContext from "./UserContext";
import { useState } from "react";

function UserContextProvider({children}){
    const [data, setData] = useState({name:'', password:''});
    return (
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;