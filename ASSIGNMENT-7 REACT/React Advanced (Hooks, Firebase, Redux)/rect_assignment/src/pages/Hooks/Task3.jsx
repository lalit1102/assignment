import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

const Task3 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold">Redux Counter</h2>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{count}</h2>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 py-3 bg-red-500 text-white font-semibold rounded-xl
                       hover:bg-red-600 active:scale-95 transition"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(increment())}
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

export default Task3;
