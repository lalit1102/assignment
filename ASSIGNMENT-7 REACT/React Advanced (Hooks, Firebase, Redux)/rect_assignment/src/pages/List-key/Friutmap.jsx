import React from "react";

const Friutmap = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-200 text-center">
          <h2 className="text-4xl font-bold mb-4">Fruit-List</h2>

          <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-lg shadow-md w-64">
            {fruits.map((fruit, index) => (
              <li
                key={index}
                className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition"
              >
                {fruit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friutmap;
