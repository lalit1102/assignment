import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const BookNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedRoomId, setSelectedRoomId] = useState(id || "");
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [pricePerNight, setPricePerNight] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomQty, setRoomQty] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const room = roomsDummyData.find((item) => item._id === selectedRoomId);


  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const total = room ? nights * pricePerNight * roomQty : 0;
  const bookingId = room ? `BK-${selectedRoomId}-${Date.now()}` : null;

  const handleConfirmBooking = async () => {
    if (!guestName || !guestEmail || !guestPhone || !checkIn || !checkOut || !selectedRoomType) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const bookingData = {
        bookingId,
        roomId: selectedRoomId,
        roomName: room.name,
        roomType: selectedRoomType,
        roomQty,
        guestName,
        guestEmail,
        guestPhone,
        checkIn,
        checkOut,
        nights,
        pricePerNight,
        totalPrice: total,
        status: "Pending", 
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "bookings"), bookingData);
      alert("Booking Confirmed!");
      navigate("/my-bookings"); 
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 mt-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gray-100 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Book Your Stay
          </h1>
          <p className="text-sm text-gray-500">
            {room ? room.name : "Select a room to continue"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              Guest Details
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full border rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full border rounded-md p-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full border rounded-md p-2"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </div>

              <input
                type="number"
                min="1"
                value={roomQty}
                onChange={(e) => setRoomQty(parseInt(e.target.value))}
                className="w-full border rounded-md p-2"
                placeholder="Number of Rooms"
              />

              {room?.roomType && (
                <select
                  value={selectedRoomType}
                  onChange={(e) => {
                    const type = e.target.value;
                    setSelectedRoomType(type);
                    const selected = room.roomType.find(
                      (rt) => rt.type === type,
                    );
                    setPricePerNight(
                      selected ? selected.price : room.pricePerNight,
                    );
                  }}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">Select Room Type</option>
                  {room.roomType.map((rt, i) => (
                    <option key={i} value={rt.type}>
                      {rt.type} — ₹{rt.price}/night
                    </option>
                  ))}
                </select>
              )}
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg p-5">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              Booking Summary
            </h2>

            {room ? (
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Room</span>
                  <span>{room.name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Room Type</span>
                  <span>{selectedRoomType || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Rooms</span>
                  <span>{roomQty}</span>
                </div>

                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹ {pricePerNight || room.pricePerNight} / night</span>
                </div>

                <div className="flex justify-between">
                  <span>Nights</span>
                  <span>{nights}</span>
                </div>

                <div className="flex justify-between">
                  <span>Check-in</span>
                  <span>{checkIn || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Check-out</span>
                  <span>{checkOut || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Guest</span>
                  <span>{guestName || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Amenities</span>
                  <span>{room.amenities?.join(", ") || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Booking ID</span>
                  <span>{bookingId}</span>
                </div>

                <div className="flex justify-between">
                  <span>Payment Status</span>
                  <span>{nights > 0 ? "Pending" : "-"}</span>
                </div>

                <hr />

                <div className="flex justify-between font-medium text-gray-800">
                  <span>Total</span>
                  <span>₹ {total}</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Please select a room</p>
            )}

            <button
              onClick={handleConfirmBooking}
              disabled={!room || nights === 0 || !selectedRoomType}
              className="w-full mt-6 bg-blue-600 disabled:bg-gray-400 text-white py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
