import { useUser } from "../../../context/UserContext";

const Welcome = () => {
  const { user } = useUser();

  return (
    <div className="p-4 bg-white rounded shadow">
      {user ? (
        <h3 className="text-xl font-bold">Welcome, {user.name} 🎉</h3>
      ) : (
        <p className="text-gray-500">Please login</p>
      )}
    </div>
  );
};

export default Welcome;
