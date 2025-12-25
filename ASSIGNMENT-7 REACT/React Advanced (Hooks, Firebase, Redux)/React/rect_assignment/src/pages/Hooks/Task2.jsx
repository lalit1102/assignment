import { useEffect, useState } from "react";

const Task2 = () => {
 const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center"> Fetch and Display Data from an API </h1>
     <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left border-b">ID</th>
            <th className="px-4 py-3 text-left border-b">Name</th>
            <th className="px-4 py-3 text-left border-b">Username</th>
            <th className="px-4 py-3 text-left border-b">Email</th>
            <th className="px-4 py-3 text-left border-b">Phone</th>
            <th className="px-4 py-3 text-left border-b">Website</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-4 text-gray-500"
              >
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-all duration-300 ease-in-out"
              >
                <td className="px-4 py-3 border-b">{user.id}</td>
                <td className="px-4 py-3 border-b">{user.name}</td>
                <td className="px-4 py-3 border-b">{user.username}</td>
                <td className="px-4 py-3 border-b">{user.email}</td>
                <td className="px-4 py-3 border-b">{user.phone}</td>
                <td className="px-4 py-3 border-b">{user.website}</td>
                
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Task2;
