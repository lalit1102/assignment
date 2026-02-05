import React, { useContext } from 'react'
import { UserDataContext } from './ContextUse'


const Form = () => {
  const {data,setData,savedata,id} = useContext(UserDataContext)

  const handlechange = (e) =>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }
  return (
    <div>
      <h1>using UseContext hook</h1>
      <form action="#" method="post" onSubmit={savedata}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handlechange}
          />
          <br />
          <label htmlFor="">age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={data.age}
            onChange={handlechange}
          />
          <br />
          <label htmlFor="">salary</label>
          <input
            type="number"
            name="salary"
            id="salary"
            value={data.salary}
            onChange={handlechange}
          />
          <br />
          <br />
          <button type="submit">save</button>
        </form>
    </div>
  )
}

export default Form
