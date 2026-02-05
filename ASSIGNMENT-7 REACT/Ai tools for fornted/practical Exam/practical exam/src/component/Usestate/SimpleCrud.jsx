import { useState } from "react"

const SimpleCrud = ()=>{
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })
  const handlechange = (e) => {
    const {name,value} =  e.target
    setData({
      ...data,
      [name]:value
    })
  }
  const [id,setId] = useState("")
  const [alldata,setAlldata] =  useState([])
  const savedata = (e) => {
    e.preventDefault()

    if(id !== ""){
      const res = alldata.map((i,index)=>(index===id)?data:i)
      setAlldata(res)

    } else {

      setAlldata([...alldata,data])
    }
    setId("")
    setData({
      name:"",
      age:"",
      salary:""
    })
  } 

  const editdata = (id) => {
    const res =  alldata.find((i,index)=>index === id )
    setData(res)
    setId(id)

  }
  const deletedata = (id) => {
    const res = alldata.filter((i,index)=>index !== id)
    setAlldata(res)
  }

  return (
      <div>
        <h1>Using UseState crud</h1>
        <form action="#" method="post" onSubmit={savedata} >
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" value={data.name} onChange={handlechange} /><br />
          <label htmlFor="">age</label>
          <input type="number" name="age" id="age" value={data.age} onChange={handlechange} /><br />
          <label htmlFor="">salary</label>
          <input type="number" name="salary" id="salary" value={data.salary} onChange={handlechange} /><br /><br />
          <button type="submit">save</button>
        </form><br />
        <div><br />
          <table border={2}>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                alldata.map((i,index)=>{
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.salary}</td>
                      <td>
                        <button onClick={()=>editdata(index)}>Edit</button>
                        <button onClick={()=>deletedata(index)}>delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}
 
export default SimpleCrud

