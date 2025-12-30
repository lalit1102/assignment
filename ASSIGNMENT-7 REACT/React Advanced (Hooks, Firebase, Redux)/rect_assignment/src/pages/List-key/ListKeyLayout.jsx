import { NavLink, Outlet } from "react-router-dom";

const ListKeyLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-orange-600 text-white rounded-lg"
      : "px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">List-key</h1>

      <div className="flex gap-4 mb-6">
        <NavLink to="task1" className={linkClass}>
          Task1
        </NavLink>
        <NavLink to="task2" className={linkClass}>
          Task2
        </NavLink>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default ListKeyLayout;
