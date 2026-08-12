import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import ItemCard from "../ItemCard";
import databaseService from "../../appwrite/DatabaseService";
import { deletePost } from "../../features/postsSlice";


function RoomPage() {
    const { roomName } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData)

    console.log("useSelector(state => state.allPosts)?.allPosts : ", useSelector(state => state.allPosts))

    const posts = useSelector(state => state.allPosts)?.allPosts || [];
    const post = posts.find(post => post.$id === roomName) || null;
    const isEditable = post?.postUserId === userData?.$id;


    const handleEditRoom = () => {
        navigate(`/edit-room/${post.$id}`)
    }
    const handleDeleteRoom = async () => {
        alert("Confirm DeletePost")
        dispatch(deletePost(post))
        await databaseService.deletePost(post.$id);
        await databaseService.deleteImage(post.postImageId);
        console.log("Post Deleted Successfully...");
        navigate("/")

    }
    useEffect(() => {
        if (!roomName) {
            navigate("/")
            return
        }
    }, []);



    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto">
            {post ? <ItemCard post={post} /> : <div>No Post Found</div>}
            {isEditable && (
                <div className="flex w-full justify-center [&>button]:max-w-40 gap-5 [&>button]:rounded-2xl p-3">
                    <button className="px-3 py-1 bg-amber-500" onClick={handleEditRoom}>Edit Room</button>
                    <button className="px-3 py-1 bg-red-500" onClick={handleDeleteRoom}>Delete Room</button>
                </div>
            )}
        </div>
    )
}
export default RoomPage