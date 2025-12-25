import { useState, useEffect } from "react";
import { auth, provider, db } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const FirebaseTask2 = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editId, setEditId] = useState(null);

  // Google SignIn
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Firestore CRUD
  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    setTasks(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const taskDoc = doc(db, "tasks", editId);
      await updateDoc(taskDoc, { name: taskName });
    } else {
      await addDoc(collection(db, "tasks"), { name: taskName });
    }
    setTaskName("");
    setEditId(null);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setTaskName(task.name);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    fetchTasks();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Firebase Task2 – CRUD + Google Auth</h2>

      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="mb-4">
          <p>Welcome, {user.displayName}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}

      {user && (
        <>
          <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Task name"
              className="border p-2 rounded flex-1"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              {editId ? "Update" : "Add"}
            </button>
          </form>

          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="flex gap-2 mb-2 items-center">
                <span className="flex-1">{task.name}</span>
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default FirebaseTask2;
