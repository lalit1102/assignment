import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { assets, roomsDummyData } from "../assets/assets"; // Import roomsDummyData
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const room = roomsDummyData.find((r) => r._id === data.roomId);
          
         
          const hotel = room ? room.hotel : { name: "Unknown Hotel", address: "Unknown Address" };
          
          return {
            _id: doc.id,
            ...data,
            room: room || { images: [assets.roomImg1], roomType: data.roomType }, 
            hotel: hotel,
            checkInDate: data.checkIn,
            checkOutDate: data.checkOut,
            guests: data.roomQty, 
            isPaid: data.status === "Paid" 
          };
        });
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
         <div className="text-xl text-gray-600">Loading your bookings...</div>
      </div>
    );
  }

  return (
    <div className="py-28 md:pb-35 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily Your Past current,and upcoming hotel reservations in one place your trips seamlessly with just a few clicks"
        align="left"
      />
      
      {bookings.length === 0 ? (
           <div className="mt-10 text-gray-500 text-lg">No bookings found.</div>
      ) : (
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        <div className="md:hidden w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="flex justify-between">
            <span>Hotels</span>
            <span>Date & Timings</span>
            <span>Payment</span>
          </div>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* hotel detail */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images && booking.room.images.length > 0 ? booking.room.images[0] : assets.roomImg1}
                alt="hotel-image"
                className="md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.roomName}
                  <span className="font-inter text-sm"> ({booking.roomType})</span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guest-icon" />
                  <span>Guests: {booking.guests}</span>
                </div>
                  <p className="text-base">Total: ₹{booking.totalPrice}</p>
              </div>
            </div>
           
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>{booking.isPaid ? "Paid" : "UnPaid"}</p>
              </div>
              {!booking.isPaid && (
                <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default MyBookings;
