// import React from 'react'

import UserItem from "./UserItem";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
function User() {
  const {data} = useContext(UserContext);
  console.log(data)
  if(data['name']===''&&data['password']==='') return <div>Login</div>
    return (
    <div>
      <h1>User Details From User</h1>
      <UserItem />
    </div>
  );
}

export default User;
