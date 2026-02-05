import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();
const ContextUse = ({children}) => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState(null)
  const[data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })

  const savedata = (e) => {
    e.preventDefault()
    if (id !== null) {
      const res = alldata.map((i,index)=>(id==index)?data:i)
      setAlldata(res)
    } else {
      setAlldata([...alldata,data])
    } 
    setId(null)
    setData({
      name:"",
      age:"",
      salary:""
    })
  }

  const editdata = (id) => {
    const res  = alldata.find((i,index)=>id=== index)
    setData(res)
    setId(id)
  }

  const deletedata = (id) => {
    const res = alldata.filter((i,index)=>id !== index)
    setAlldata(res)
  }
  return (
    <div>
      <UserDataContext.Provider value={{data,setData,alldata,savedata,editdata,deletedata,id}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default ContextUse
