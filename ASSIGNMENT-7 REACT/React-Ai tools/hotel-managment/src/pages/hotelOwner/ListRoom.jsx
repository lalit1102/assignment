import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import { db } from '../../firebase/firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { assets } from '../../assets/assets'

const ListRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "rooms"));
      const roomsData = querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...doc.data()
      }));
      setRooms(roomsData);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const toggleAvailability = async (id, currentStatus) => {
    try {
      const roomRef = doc(db, "rooms", id);
      await updateDoc(roomRef, {
        isAvailable: !currentStatus
      });
      // Optimistic update or refetch
      setRooms(rooms.map(room => 
        room._id === id ? { ...room, isAvailable: !currentStatus } : room
      ));
    } catch (error) {
      console.error("Error updating room status:", error);
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this room?")) {
      try {
        await deleteDoc(doc(db, "rooms", id));
        setRooms(rooms.filter(room => room._id !== id));
      } catch (error) {
        console.error("Error deleting room:", error);
        alert("Failed to delete room");
      }
    }
  };

  if(loading) {
    return <div className="p-8 text-center text-gray-500">Loading rooms...</div>;
  }

  return (
    <div>
      <Title align="left" font="outfit" title="Room Listings" subTitle="View,edit,or manage all listed rooms,Keep the information up-to-date to provide the best experience for users." />
      <p className='text-gray-500 mt-8'>All Rooms</p>

    <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll overflow-x-auto mt-3'>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='py-3 px-4 text-gray-800 font-medium'>Image</th>
            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
            <th className='py-3 px-4 text-gray-800 font-medium'>Price / night</th>
            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Action</th>
          </tr>
        </thead>
        <tbody className='text-sm'>
            {
              rooms.map((item,index)=>(
                <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                        <img src={item.images && item.images[0] ? item.images[0] : assets.roomImg1} alt="" className="w-12 h-12 object-cover rounded" />
                    </td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.roomType}</p>
                    </td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.amenities ? item.amenities.join(", ") : "-"}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>₹{item.pricePerNight}</td>
                    <td className='py-3 px-4 border-t border-gray-300 text-sm text-center'>
                      <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>

                      <input type="checkbox" className='sr-only peer' checked={item.isAvailable} onChange={() => toggleAvailability(item._id, item.isAvailable)} />
                      <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'></div>
                      <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                      </label>
                    </td>
                    <td className='py-3 px-4 border-t border-gray-300 text-sm text-center'>
                        <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default ListRoom
