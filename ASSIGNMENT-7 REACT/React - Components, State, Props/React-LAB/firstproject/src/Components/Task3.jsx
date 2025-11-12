import { useState } from "react"

// here use State and display increment count value
const Task3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+ 1);
  };

  return (
     <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4a90e2", color: "white", border: "none", borderRadius: "6px" }}> Increment </button>
    </div> 
  )
}

export default Task3
