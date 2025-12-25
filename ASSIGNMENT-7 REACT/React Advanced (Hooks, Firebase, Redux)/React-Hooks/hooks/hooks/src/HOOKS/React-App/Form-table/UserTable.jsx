import React from "react";
// import "./index.css"

const UserTable = ({ alldata, deleteUser, editUser }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 overflow-x-auto my-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Details</h2>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left border-b">ID</th>
            <th className="px-4 py-3 text-left border-b">Name</th>
            <th className="px-4 py-3 text-left border-b">Email</th>
            <th className="px-4 py-3 text-left border-b">Password</th>
            <th className="px-4 py-3 text-left border-b">Phone</th>
            <th className="px-4 py-3 text-left border-b">Action</th>
          </tr>
        </thead>

        <tbody>
          {alldata.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-4 text-gray-500"
              >
                No users found
              </td>
            </tr>
          ) : (
            alldata.map((u, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-all duration-300 ease-in-out"
              >
                <td className="px-4 py-3 border-b">{index + 1}</td>
                <td className="px-4 py-3 border-b">{u.name}</td>
                <td className="px-4 py-3 border-b">{u.email}</td>
                <td className="px-4 py-3 border-b">••••••</td>
                <td className="px-4 py-3 border-b">
                  {u.countryCode} {u.phone}
                </td>
                <td className="px-4 py-3 border-b flex gap-3">
                  <button
                    onClick={() => editUser(index)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(index)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
