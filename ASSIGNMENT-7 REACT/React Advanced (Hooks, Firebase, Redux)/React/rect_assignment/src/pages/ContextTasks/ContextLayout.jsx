import { NavLink, Outlet } from "react-router-dom";

const ContextLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-blue-600 text-white rounded"
      : "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Context API Tasks</h1>

      <div className="flex gap-4 mb-6">
        <NavLink to="task1" className={linkClass}>
          Task 1 (Theme)
        </NavLink>

        <NavLink to="task2" className={linkClass}>
          Task 2 (Auth)
        </NavLink>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default ContextLayout;
