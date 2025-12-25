import { NavLink, Outlet } from "react-router-dom";

const HooksLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
      : "px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          React Hooks Tasks
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <NavLink to="task1" className={linkClass}>
            Task 1
          </NavLink>
          <NavLink to="task2" className={linkClass}>
            Task 2
          </NavLink>
          <NavLink to="task3" className={linkClass}>
            Task 3
          </NavLink>
          <NavLink to="task4" className={linkClass}>
            Task 4
          </NavLink>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HooksLayout;
