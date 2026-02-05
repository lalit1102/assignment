import React, { useCallback, useEffect, useState } from 'react'
import Table from './Table'
import axios from 'axios'

const CallbackCrud = () => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState(null)
  const Api = "http://localhost:3000/callback"
  const[data,setData] = useState({
    name:"",
    age:"",
    salary:""
  })

  const handlechange = (e) => {
    const {name,value} = e.target
    setData({
      ...data,[name]:value
    })
  }
    const disp = useCallback(()=>{
        axios.get(Api)
        .then((res)=>setAlldata(res.data))
    },[Api])

    useEffect(()=>{
      disp()
    },[disp])


  const savedata = useCallback((e)=>{
    e.preventDefault()

    if(id) {

      axios.put(`${Api}/${id}`,data)
      .then(()=>{
        disp()
        setId(null)
        setData({
          name:"",age:"",salary:""
        })
      })

    } else {

      
      axios.post(Api,data)
      .then(()=>{
        disp()
        setData({
          name:"",age:"",salary:""
        })
      })
    }
      
  },[Api,data,id,disp])

  const deletedata = useCallback((id)=>{
    axios.delete(`${Api}/${id}`)
    .then(()=>{
      disp()
    })

  },[Api,disp])

  const editdata = useCallback((id)=>{
      axios.get(`${Api}/${id}`)
      .then((res)=>{
        setData({
          name:res.data.name,
          age:res.data.age,
          salary:res.data.salary
        })
        setId(res.data.id)
      })
  },[Api])

  return (
    <div>
         <div>
        <h1>Using UseCallBack crud</h1>
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
        <Table alldata={alldata} deldata={deletedata} editData = {editdata} />
        </div>
      </div>
    </div>
  )
}

export default CallbackCrud
