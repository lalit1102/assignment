import { useState } from "react";
import { useUser } from "../../../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const { user, login, logout } = useUser();

  if (user) {
    return (
      <button
        onClick={logout}
        className="bg-red-600 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    );
  }

  return (
    <div className="flex gap-3 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 rounded"
      />
      <button
        onClick={() => login(name)}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
