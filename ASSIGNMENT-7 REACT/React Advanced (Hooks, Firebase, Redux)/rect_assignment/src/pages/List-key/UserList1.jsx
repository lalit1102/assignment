import React from "react";

const UserList1 = () => {
  const users = [
    { id: 1, name: "Lalit", email: "lalit@gmail.com" },
    { id: 2, name: "Amit", email: "amit@gmail.com" },
    { id: 3, name: "Neha", email: "neha@gmail.com" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User List
        </h2>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex flex-col bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition"
            >
              <span className="font-semibold text-gray-700">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">
                {user.email}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList1;
