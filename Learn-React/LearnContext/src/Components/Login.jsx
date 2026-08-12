import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext, useState } from "react";

function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const {setData} = useContext(UserContext);
    const Navigate = useNavigate()
    const handleNameChange = (e)=>{
        setName(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setData({name:name, password:password});
        Navigate('/user');
    }
    return (
        <div>
            <label htmlFor="name">Name : </label>
            <input 
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            />
            <label htmlFor="pass">Password :</label>
            <input 
            type="text" 
            id="pass"
            value={password}
            onChange={handlePasswordChange}
            />
            <button
            onClick={handleClick}
            >Submit</button>
        </div>
    );
}
export default Login;