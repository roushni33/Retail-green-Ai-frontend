import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between gap-y-6">
        {/* Card 1 */}
        <div className="w-[23%] min-w-[200px] p-4 rounded-md border border-white flex items-center gap-4 shadow-sm bg-white">
          <div className="rounded-md p-3 bg-gray-300 flex items-center justify-center">
            <span className="text-xl">📦</span>
          </div>
          <div>
            <span className="text-[#197685] text-2xl">8</span>
            <h4 className="text-gray-500 text-sm">Total Products</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[23%] min-w-[200px] p-4 rounded-md border border-white flex items-center gap-4 shadow-sm bg-white">
          <div className="rounded-md p-3 bg-gray-300 flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
          <div>
            <span className="text-[#197685] text-2xl">6</span>
            <h4 className="text-gray-500 text-sm">Active Inventory</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[23%] min-w-[200px] p-4 rounded-md border border-white flex items-center gap-4 shadow-sm bg-white">
          <div className="rounded-md p-3 bg-gray-300 flex items-center justify-center">
            <span className="text-xl">⚠️</span>
          </div>
          <div>
            <span className="text-[#197685] text-2xl">3</span>
            <h4 className="text-gray-500 text-sm">High Waste Risk Items</h4>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[23%] min-w-[200px] p-4 rounded-md border border-white flex items-center gap-4 shadow-sm bg-white">
          <div className="rounded-md p-3 bg-gray-300 flex items-center justify-center">
            <span className="text-xl">🌱</span>
          </div>
          <div>
            <span className="text-[#197685] text-2xl">14.30</span>
            <h4 className="text-gray-500 text-sm">Total Carbon Footprint (kg CO₂)</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
