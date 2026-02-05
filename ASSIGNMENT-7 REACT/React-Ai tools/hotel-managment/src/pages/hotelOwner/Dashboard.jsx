import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const totalRevenue = bookingsList.reduce((sum, booking) => sum + (Number(booking.totalPrice) || 0), 0);

        setDashboardData({
          totalBookings: bookingsList.length,
          totalRevenue: totalRevenue,
          bookings: bookingsList
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;
  }

  return (
    <div>
      <Title align="left" font="outfit" title="Dashboard" subTitle="Monitor your room listings, track bookings and analyze revenue-all in one place.stay updated with real time insight to ensure smooth operations." />
      <div className='flex flex-col sm:flex-row gap-4 my-8'>
        {/* Total bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 w-full sm:w-auto items-center'>
          <img src={assets.totalBookingIcon} alt="total booking" className='h-10' />
          <div className='flex flex-col ml-4 font-medium'>
          <p className='text-blue-500 text-lg'>Total Bookings</p>
          <p className='text-purple-400 text-base'>{dashboardData.totalBookings}</p>
          </div>

        </div>
        {/* total revenue */}
         <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 w-full sm:w-auto items-center'>
          <img src={assets.totalRevenueIcon} alt="total booking" className='h-10' />
          <div className='flex flex-col ml-4 font-medium'>
          <p className='text-blue-500 text-lg'>Total Revenue</p>
          <p className='text-purple-400 text-base'>₹ {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

        <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'>Guest Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name & Type</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
              </tr>
            </thead>
            
            <tbody className='text-sm'>
              {dashboardData.bookings.map((item,index)=>(
                <tr key={index}>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.guestName || "Unknown"}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                    {item.roomName} <span className="text-xs text-gray-500">({item.roomType})</span>
                  </td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>₹ {item.totalPrice}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 flex justify-center'>
                    <button className={`py-1 px-3 text-xs rounded-full ${item.status === 'Paid' ? "bg-green-200 text-green-600" : "bg-amber-200 text-yellow-600"}`}>
                        {item.status || "Pending"}
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Dashboard