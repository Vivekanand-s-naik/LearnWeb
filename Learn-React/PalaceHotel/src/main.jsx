import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import ScrollToTop from './components/ScrollToTop.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import ErrorPage from './components/pages/ErrorPage.jsx';
import MainLayout from './components/pages/MainLayout.jsx';
import Login from './components/authentication/Login.jsx';
import Rooms from './components/Rooms.jsx';
import Gallery from './components/Gallery.jsx';
import SignUp from './components/authentication/SignUp.jsx';
import RoomPage from './components/pages/RoomPage.jsx';
import RoomForm from './components/pages/RoomForm.jsx';
import EditRoom from './components/EditRoom.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <App />
			},
			{
				path:'login',
				element:<Login />
			},
			{
				path:'signup',
				element: <SignUp />
			},
			{
				path:'rooms',
				element: <Rooms />,
			},
			
			{
				path:'rooms/:roomName',
				element: <RoomPage />,
			},
			{
				path: 'add-room',
				element: <RoomForm /> 
			},
			{
				path:'gallery',
				element : <Gallery />
			},
			{
				path: 'edit-room/:roomTitle',
				element: <EditRoom />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(

	<Provider store={store}>
		<RouterProvider router={router} >
			<ScrollToTop />
		</RouterProvider>
	</Provider>
)
