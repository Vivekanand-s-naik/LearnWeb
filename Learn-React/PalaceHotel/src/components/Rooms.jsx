import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { Link } from "react-router";
function Rooms() {
	const allPosts = useSelector(state => state.allPosts)?.allPosts;
	console.log(allPosts)
	return (
		<div className="text-9xl flex gap-5 p-5 h-screen">
			{allPosts && allPosts.map((post) => {
				return <Link to={`${post.$id}`}><ItemCard key={post.$id} post={post} /></Link>
			})}
		</div>
	)
}

export default Rooms