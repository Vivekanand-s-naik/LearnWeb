import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="fixed z-50 bg-transparent w-full mx-auto px-5 py-3 mb-12 shadow-[0px_0px_50px_rgba(0,2,0,0.5)] backdrop-blur-sm">
      <nav>
        <ul className="flex gap-4 justify-center uppercase tracking-wider sm:justify-between dark:[&>li>a:hover]:bg-fuchsia-900 [&>li>a:hover]:bg-[#FFE887] [&>li>a:hover]:transition-colors">
          <li className="me-auto ">
            <NavLink to="" className="inline-block min-h-8 w-auto p-2 my-4">
              Me
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="inline-block min-h-8 w-auto p-2 my-4">
              Start Here
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="inline-block min-h-8 w-auto p-2 my-4">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="inline-block min-h-8 w-auto p-2 my-4">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="inline-block min-h-8 w-auto p-2 my-4">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="login" className="inline-block min-h-8 w-auto p-2 my-4">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="inline-block h-16 w-auto p-4 my-2 rounded-3xl bg-fuchsia-700"
            >
              GetStarted
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
