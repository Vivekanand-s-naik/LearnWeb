import { useEffect, useState } from "react";
import { useParams } from "react-router"
import databaseService from "../appwrite/DatabaseService";
import RoomForm from "./pages/RoomForm";

function EditRoom() {
    const {roomTitle} = useParams();
    const [room, setRoom] = useState(null)
    useEffect(()=>{
        databaseService.getPost(roomTitle)
        .then(room => setRoom(room));
    }, [])
    console.log(room);
    return (
        <div>
            {console.log("calling Room Form")}
            <RoomForm {...room} />
        </div>
    )
}

export default EditRoom