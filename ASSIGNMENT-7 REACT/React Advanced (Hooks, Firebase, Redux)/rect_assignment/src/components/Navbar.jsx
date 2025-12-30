

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400 transition";

  return (
    <nav className="bg-black text-white px-8 py-4 flex gap-8 items-center">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/hooks/task1" className={linkClass}>
        Hooks
      </NavLink>

      <NavLink to="/router/project1" className={linkClass}>
        Router
      </NavLink>

      <NavLink to="/firebase/task1" className={linkClass}>
        Firebase
      </NavLink>
      
      <NavLink to="/context/task1" className={linkClass}>
        Context API
      </NavLink>

      <NavLink to="/redux/task1" className={linkClass}>
        Redux
      </NavLink>

      <NavLink to="/lifecycle/" className={linkClass}>
        Life-Cycle
      </NavLink>

      <NavLink to="/forms/" className={linkClass}>
        Forms
      </NavLink>

      <NavLink to="/listkeylayout/" className={linkClass}>
        List-Key
      </NavLink>

      <NavLink to="/conditionalrendring" className={linkClass}>
        Conditional-Rendring
      </NavLink>

      <NavLink to="/handlingeventlayout" className={linkClass}>
        Handling-Event
      </NavLink>
      
    </nav>
  );
};

export default Navbar;
