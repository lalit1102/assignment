import { useEffect, useState } from "react";

const EffectCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState(null);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("lalit"));
    if (res) setAlldata(res);
  }, []);

  useEffect(() => {
    localStorage.setItem("lalit", JSON.stringify(alldata));
  }, [alldata]);

  const savedata = (e) => {
    e.preventDefault();
    if (id !== null) {
      const res = alldata.map((i, index) => (id === index ? data : i));
      setAlldata(res);
    } else {
      setAlldata([...alldata, data]);
    }
    setId(null);
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };

  const editdata = (id) => {
    const res = alldata.find((i, index) => id === index);
    setData(res);
    setId(id);
  };

  const deletedata = (id) => {
    const res = alldata.filter((i, index) => id !== index);
    setAlldata(res);
  };
  return (
    <>
      <div>
        <h1>using UseEffect Crud</h1>
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
    </>
  );
};
export default EffectCrud;
