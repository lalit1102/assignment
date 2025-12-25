import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-3 rounded-2xl shadow-lg w-100 text-center ">
        <h2 className="text-4xl font-bold mb-4">useState Hooks</h2>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{count}</h2>

        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="flex-1 py-3 bg-red-500 text-white font-semibold rounded-xl
                       hover:bg-red-600 active:scale-95 transition"
          >
            Decrement
          </button>

          <button
            onClick={increment}
            className="flex-1 py-3 bg-green-500 text-white font-semibold rounded-xl
                       hover:bg-green-600 active:scale-95 transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task1;
