import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Calculator from './pages/Calculator';
import SystemHealth from './pages/SystemHealth';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/system-health" element={<SystemHealth />} />
        </Routes>
        
    </div>
  )
}

export default App