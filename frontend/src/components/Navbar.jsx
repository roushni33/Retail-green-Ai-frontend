import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-5'>
        <div className='flex gap-6'>
          <Link to="/" className="text-xl text-[#197685] font-medium">RetailGreen AI</Link>
        <Link to="/" className="text-gray-500 px-3 py-1   rounded-md hover:bg-[#197685] hover:text-white focus:bg-[#197685] focus:text-white ">Dashboard</Link>
        <Link to="/products" className="text-gray-500 px-3 py-1  rounded-md hover:bg-[#197685] hover:text-white focus:bg-[#197685] focus:text-white">Product</Link>
        <Link to="/inventory" className="text-gray-500 px-3 py-1   rounded-md hover:bg-[#197685] hover:text-white focus:bg-[#197685] focus:text-white">Inventory</Link>
        <Link to="/calculator" className="text-gray-500 px-3 py-1  rounded-md hover:bg-[#197685] hover:text-white focus:bg-[#197685] focus:text-white">Calculator</Link>
        <Link to="/system-health" className="text-gray-500 px-3 py-1   rounded-md hover:bg-[#197685] hover:text-white focus:bg-[#197685] focus:text-white">System Health</Link>
        </div>
        <div className='text-gray-500 text-lg'>  
            Admin User
        </div>

    </div>
  )
}

export default Navbar