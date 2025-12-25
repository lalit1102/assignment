import { NavLink, Outlet } from "react-router-dom";

const RouterLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          React Router Projects
        </h1>

        <div className="flex justify-center gap-8 mb-8">
          <NavLink to="project1" className={linkClass}>
            Project 1
          </NavLink>
          <NavLink to="project2" className={linkClass}>
            Project 2
          </NavLink>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RouterLayout;
