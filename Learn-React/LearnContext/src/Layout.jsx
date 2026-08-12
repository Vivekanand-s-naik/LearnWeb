import './App.css';
import UserContextProvider from './Context/UserContextProvider';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg-amber-500 h-screen'>
    <UserContextProvider>
      <Header />
      <div className="pt-32">
      <Outlet />           
      </div>

    </UserContextProvider>
    </div>
  )
}

export default Layout;