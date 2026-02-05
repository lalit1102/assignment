import React, { useContext } from 'react'
import {UserDataContext } from './ContextUse';

const Table = () => {
  const {alldata,editdata,deletedata} = useContext(UserDataContext)
  return (
    <div>
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
            {alldata.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>
                    <button onClick={() => editdata(index)}>Edit</button>
                    <button onClick={() => deletedata(index)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Table
