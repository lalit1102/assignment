import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { use } from "react";
const MemoUse = () => {
  const Api = "http://localhost:5000/memos";

  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [search, setSearch] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState(null);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const disp = () => {
    axios.get(Api).then((res) => setAlldata(res.data));
  };

  useEffect(() => {
    disp();
  },[]);

  const savedata = (e) => {
    e.preventDefault();

    if (id) {
      axios.put(`${Api}/${id}`, data).then(() => {
        disp(), setId(null);
        setData({
          name: "",
          age: "",
          salary: "",
        });
      });
    } else {
      axios.post(Api, data).then(() => {
        disp(), setId(null);
        setData({
          name: "",
          age: "",
          salary: "",
        });
      });
    }
  };

  const deletedata = (id) => {
    axios.delete(`${Api}/${id}`).then(() => {
      disp();
    });
  };

  const editdata = (id) => {
    axios.get(`${Api}/${id}`).then((res) => {
      setData({
        name: res.data.name,
        age: res.data.age,
        salary: res.data.salary,
      });
      setId(res.data.id);
    });
  };

 const filterdata = useMemo(() => {
  console.log("Filtering data...")
  return alldata.filter((item) => {
    const lowerSearch = search.toLowerCase();
    
    return (
      item.name.toLowerCase().includes(lowerSearch) ||   
      item.age.toString().includes(lowerSearch) ||       
      item.salary.toString().includes(lowerSearch)       
    );
  });
}, [alldata, search]);
  

useEffect(()=>{
  console.log("filter data",filterdata);
  
},[filterdata])





  return (
    <div>
      <div>
        <h1>Using UseMemo crud</h1>

        <input
          type="text"
          placeholder="Search by name, age, salary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
        <br />
        <div>
          <br />
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
              {filterdata.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <button onClick={() => editdata(i.id)}>Edit</button>
                      <button onClick={() => deletedata(i.id)}>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemoUse;
