import { NavLink, Outlet } from "react-router-dom";

const Project1Layout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-blue-600 text-white rounded-lg"
      : "px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg";

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Project 1 – Basic Routing
      </h2>

      <div className="flex gap-4 mb-6">
        <NavLink to="home" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="about" className={linkClass}>
          About
        </NavLink>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Project1Layout;
