import React, { useState } from "react";

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">
        {isLoggedIn ? "Welcome Back!" : "Please Login"}
      </h2>

      {isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginLogout;
