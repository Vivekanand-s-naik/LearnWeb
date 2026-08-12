import { Outlet } from "react-router"
import Header from "../header/Header"
import Footer from "../Footer/Footer"

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout