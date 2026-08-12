
import './App.css';
import User from './Components/User';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login'
import Header from './Components/Header';

function App() {
return (
    <div className='bg-amber-500 h-screen'>
    <UserContextProvider>
      <Header />
      <h1 >Test</h1>
      <Login />
      <User />      
    </UserContextProvider>
    </div>
  )
}

export default App
