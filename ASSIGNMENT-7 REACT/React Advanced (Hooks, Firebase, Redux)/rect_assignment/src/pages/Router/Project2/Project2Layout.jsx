import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Project2Layout = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Project 2 – Navigation Bar
      </h2>

      <Navbar />

      <div className="mt-6 bg-gray-50 p-6 rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Project2Layout;
