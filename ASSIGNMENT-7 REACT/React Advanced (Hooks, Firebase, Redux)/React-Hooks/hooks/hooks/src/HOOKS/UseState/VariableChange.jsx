import { useState } from "react"


const VariableChange = () => {
  const [user,setUser] = useState({
    name:"Lalit",
    Study:"Tops",
    Course:"FullStack developer"
  })
 const changeCourse = () => {
  setUser((prev)=>({
    ...prev,
    Course:"MERN Stack developer"

  }))
}

  
  return (
    <>
    <h1>how to change variable value change </h1>
    <h3>my name is :--{user.name}</h3>
    <h3>my study in :--{user.Study}</h3>
    <h3>my Course is :--{user.Course}</h3>
    <button onClick={changeCourse}>Course change</button>
    </>
  )
}
 
export default VariableChange