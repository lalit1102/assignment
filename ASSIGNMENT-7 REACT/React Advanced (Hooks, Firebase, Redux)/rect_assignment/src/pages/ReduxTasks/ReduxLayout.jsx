import { NavLink, Outlet } from "react-router-dom";

const ReduxLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-blue-600 text-white rounded-lg"
      : "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Redux & Recoil Tasks</h1>

      <div className="flex gap-4 mb-6">
        <NavLink to="task1" className={linkClass}>
          Task 1 (Redux Counter)
        </NavLink>

       

        <NavLink to="task3" className={linkClass}>
          Task 2 (Redux Toolkit CRUD)
        </NavLink>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default ReduxLayout;
