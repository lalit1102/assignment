import React, { useState } from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      
      {/* Navbar */}
      <Navbar toggleSidebar={() => setOpen(!open)} />

      <div className="flex flex-1 relative">

        {/* Sidebar */}
        <div
          className={`
            fixed md:static z-40 h-full
            bg-white
            transition-transform duration-300
            ${open ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          <Sidebar closeSidebar={() => setOpen(false)} />
        </div>

        {/* Overlay (Mobile) */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 pt-16 md:pt-10 md:px-10 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout
