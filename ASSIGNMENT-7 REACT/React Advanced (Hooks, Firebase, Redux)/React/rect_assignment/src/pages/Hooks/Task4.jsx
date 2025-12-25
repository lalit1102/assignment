import { useRef, useState } from "react";

const Task4 = () => {
  let [count,setCount] = useState(0)
    let a = useRef(10)
    const addCounter = () => {
      setCount(count+1)
      a.current = a.current + 10 
      console.log(a)
    }
  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-200 text-center">
              <h2 className="text-4xl font-bold mb-4">useReff Hooks</h2>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Here count is A ==== {count}</h2>     
                <button
                  onClick={addCounter}
                  className="flex-1 py-4 px-3 bg-green-500 text-white font-semibold rounded-xl
                  hover:bg-green-600 active:scale-95 transition"
                >
                  Increment
                </button>
                  <h2 className="mt-4 text-xl font-bold text-gray-800 mb-6">Here set a Current value of A===={a.current}</h2>     
              
            </div>
          </div>
    </div>
  );
};

export default Task4;
