import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { db, storage } from '../../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  })

  const [inputs, setInputs] = useState({
    hotelName: '',
    roomType: '',
    pricePerNight: '',
    amenities: {
      'Free Wifi': false,
      'Free BreakFast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    },
  })
  
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    const uploadedUrls = [];
    const imageFiles = Object.values(images).filter(img => img !== null);
    
    for (const imageFile of imageFiles) {
      const storageRef = ref(storage, `rooms/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const url = await getDownloadURL(storageRef);
      uploadedUrls.push(url);
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = await handleImageUpload();
      
      const selectedAmenities = Object.keys(inputs.amenities).filter(
        (key) => inputs.amenities[key]
      );

      const roomData = {
        name: inputs.hotelName, // Using hotel name as room title/name for now based on dummy data pattern
        hotel: { name: inputs.hotelName, address: "Address Placeholder", city: "City Placeholder" }, // Placeholder for hotel details
        roomType: inputs.roomType, // Saving as string for now, or could be array if needed
        pricePerNight: Number(inputs.pricePerNight),
        amenities: selectedAmenities,
        images: imageUrls.length > 0 ? imageUrls : [assets.roomImg1], // Fallback if no images
        isAvailable: true,
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "rooms"), roomData);
      
      alert("Room Added Successfully!");
      
      // Reset Form
      setImages({ 1: null, 2: null, 3: null, 4: null, 5: null });
      setInputs({
        hotelName: '',
        roomType: '',
        pricePerNight: '',
        amenities: {
          'Free Wifi': false,
          'Free BreakFast': false,
          'Room Service': false,
          'Mountain View': false,
          'Pool Access': false,
        },
      });

    } catch (error) {
      console.error("Error adding room: ", error);
      alert("Failed to add room. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"
    >
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurately for better booking experience."
      />

      {/* Images */}
      <p className="text-gray-800 mt-8">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 my-3">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="h-24 w-full object-cover cursor-pointer opacity-80 border rounded"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Hotel / Room / Price */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1">
          <p className="text-gray-800">Hotel Name</p>
          <select
            value={inputs.hotelName}
            onChange={(e) =>
              setInputs({ ...inputs, hotelName: e.target.value })
            }
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            required
          >
            <option value="">Select Hotel</option>
            <option value="Hotel Taj">Hotel Taj</option>
            <option value="Hotel Hyatt">Hotel Hyatt</option>
            <option value="Marriott Suites">Marriott Suites</option>
            <option value="Star Hotel">Star Hotel</option>
          </select>

          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            required
          >
            <option value="">Select Room</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div className="w-full md:w-40">
          <p className="text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
            required
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 mt-6">Amenities</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 max-w-md text-gray-600">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            {amenity}
          </label>
        ))}
      </div>

      {/* Submit */}
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-2 rounded mt-8 disabled:bg-blue-300"
        >
          {loading ? "Adding Room..." : "Add Room"}
        </button>
      </div>
    </form>
  )
}

export default AddRoom
