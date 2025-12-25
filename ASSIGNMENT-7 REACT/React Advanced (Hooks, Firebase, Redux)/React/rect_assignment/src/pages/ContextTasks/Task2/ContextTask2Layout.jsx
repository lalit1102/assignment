import { Outlet } from "react-router-dom";

const ContextTask2Layout = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Task 2 – Authentication</h2>
      <Outlet />
    </>
  );
};

export default ContextTask2Layout;
