import { Outlet } from "react-router-dom";

const ContextTask1Layout = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Task 1 - Theme Toggle</h2>
      <Outlet />
    </>
  );
};

export default ContextTask1Layout;
