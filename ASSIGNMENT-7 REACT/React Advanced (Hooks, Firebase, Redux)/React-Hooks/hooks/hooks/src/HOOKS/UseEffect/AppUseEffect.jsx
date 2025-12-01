import React,{useState,useEffect}from 'react'



// useEffect(() => {
//     // Code to run on each render
//     return () => {
//         // Cleanup function (optional)
//     };
// }, [dependencies]);



const AppUseEffect = () => {
  const [num, setNum] = useState(0);
  const [color,setColor] = useState("red")
      const handleClick = () => {
          setNum(num + 1);
          console.log(num);
      };

      const handleColorClick = () => {
        setColor(prevColor => (prevColor === "red" ? "blue" : "red"));
  };
        // case 1 : Run in every render

      useEffect(()=>{
          alert("Run in every render")
      },)

      // case 2 : run in first render

      useEffect(()=>{
          alert("run in first render")
      },[])

      // case 3. run in value changed

        useEffect(() => {
          alert(`Color changed to ${color}`);
        }, [color]);

  return (
    <div>
            <h2> {num}</h2>
            <button onClick={handleClick}>
                Add one
            </button>
           <button onClick={handleColorClick}>Change color</button>
        </div>
  )
}

export default AppUseEffect
