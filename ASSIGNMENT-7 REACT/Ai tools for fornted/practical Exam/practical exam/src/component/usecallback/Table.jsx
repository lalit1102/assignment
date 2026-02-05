import React, { memo } from 'react'

const Table = ({alldata,deldata,editData}) => {
  return (
    <div>
                <table border={2}>
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>name</th>
                <th>age</th>
                <th>salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                alldata.map((i)=>{
                  return (
                    <tr key={i.id}>
                      {/* <td>{index+1}</td> */}
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.salary}</td>
                      <td>
                        <button onClick={()=>editData(i.id)}>Edit</button>
                        <button onClick={()=>deldata(i.id)}>delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
    </div>
  )
}

export default memo(Table)
