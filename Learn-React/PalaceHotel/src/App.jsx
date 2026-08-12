// import { useSelector } from "react-redux"

import { useDispatch } from "react-redux";
import databaseService from "./appwrite/DatabaseService"
import { useEffect, useState } from "react"
import { Link } from "react-router";
import { initializeAllPosts } from "./features/postsSlice";
import ItemCard from "./components/ItemCard";

function App() {
	const [data, setData] = useState([]);
	const dispatch = useDispatch();
	// const allPosts = useSelector(state => state.allPosts);
	useEffect(() => {
        console.log("Initializing all lposts");
        
		databaseService.getAllPosts().then(posts => {
			setData(prevData => [...prevData, ...posts.documents]);
		})
	}, [])

	dispatch(initializeAllPosts(data));
	localStorage.setItem("allposts", JSON.stringify(data));
    
	return (
		<div className="">
			<section style={
				{
					backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')"
				}} className="h-[85vh] bg-cover bg-center relative">
				<div className="absolute inset-0 bg-black/50 bg-cover"></div>
				<div className="relative h-full flex items-center px-6 max-w-7xl">
					<div className="max-w-2xl ml-5 overflow-hidden">
						<p className="uppercase tracking-[0.4em] text-yellow-400 font-semibold mb-4">
							Welcome To Hotel Palace
						</p>
						<div className="font-extrabold text-7xl text-amber-50 leading-tight">
							Luxury Beyond
							<br />
							Expectations
						</div>
						<div className="italic text-amber-50 mt-3">
							Experience world-class hospitality, elegant rooms, fine dining, and unforgettable moments in the heart of the city.
						</div>
						<div className="[&>a]:px-3 [&>a]:py-3 flex gap-5 mt-5 font-bold">
							<Link to='/rooms' className="bg-yellow-400 rounded-2xl">
								Book Your Stay
							</Link>
							<Link to='/gallery' className="border-amber-50 border-3 rounded-2xl text-white">
								Explore Gallery
							</Link>
						</div>
					</div>
				</div>


			</section>
			{/* {data.length > 0 && <Rooms menuItems={data} />} */}
			<div className="text-9xl flex gap-5 p-5 h-screen">
				{data.length > 0 && data.map((post) => {
					return <Link to={`rooms/${post.$id}`}><ItemCard key={post.$id} post={post} /></Link>
				})}
			</div>

		</div>
	)
}

export default App