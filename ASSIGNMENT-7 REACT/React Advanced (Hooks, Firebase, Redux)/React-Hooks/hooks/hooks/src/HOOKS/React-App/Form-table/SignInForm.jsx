import React, { useEffect, useState } from "react";

const SignInForm = ({
  alldata,
  setAlldata,
  editIndex,
  setEditIndex,
  
}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    countryCode: "+91",
    phone: "",
  });

  
  useEffect(() => {
    if (editIndex !== null) {
      setData(alldata[editIndex]);
    }
  }, [editIndex, alldata]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
     
      const updated = [...alldata];
      updated[editIndex] = data;
      setAlldata(updated);
      setEditIndex(null);
    } else {
  
      setAlldata([...alldata, data]);
    }

    setData({
      name: "",
      email: "",
      password: "",
      countryCode: "+91",
      phone: "",
    });
  };

  
  return (
    <form
      onSubmit={saveData}
      className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        {editIndex !== null ? "Edit User" : "Sign In"}
      </h2>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
      </div>

  
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
      </div>

   
      <div className="mt-4 flex gap-2">
        <select
          name="countryCode"
          value={data.countryCode}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
        </select>

        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
      </div>

      <button
        className={`w-full mt-6 py-3 rounded-lg text-white transition ${
          editIndex !== null
            ? "bg-green-600 hover:bg-green-700"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {editIndex !== null ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default SignInForm;
