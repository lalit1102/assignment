import React, { useState } from "react";
import SignInForm from "./SignInForm";
import UserTable from "./UserTable";

const FormTable = () => {
  const [alldata, setAlldata] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 

  const editUser = (index) => {
    setEditIndex(index);
  };

   const deleteUser = (index) => {
    setAlldata(alldata.filter((_, i) => i !== index));
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="my-2">
        <SignInForm
          alldata={alldata}
          setAlldata={setAlldata}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          
        />

        <UserTable
          alldata={alldata}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      </div>
    </div>
  );
};

export default FormTable;

