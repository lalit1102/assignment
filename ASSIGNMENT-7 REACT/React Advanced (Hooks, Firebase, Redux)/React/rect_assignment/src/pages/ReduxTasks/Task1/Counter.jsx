import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold">Redux Counter</h1>
      <h2 className="text-2xl">Count: {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
