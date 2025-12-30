import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addItem, updateItem, deleteItem } from "../../redux/crud/crudSlice";
import {  addItem, updateItem, deleteItem  } from "../../../redux/crud/crudSlice";

const CrudPage = () => {
  const items = useSelector((state) => state.crud.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editId !== null) {
      dispatch(updateItem({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addItem(text));
    }
    setText("");
  };

  const handleEdit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Redux Toolkit CRUD</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </form>

        {/* Items List */}
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 rounded hover:bg-gray-100 transition"
            >
              <span>{item.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteItem(item.id))}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CrudPage;
