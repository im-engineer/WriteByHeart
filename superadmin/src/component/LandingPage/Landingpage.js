import React, { useState } from 'react';
import './Landingpage.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Landingpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='landing--page'>
      <Navbar/>
      <div className="content">
        {sidebarOpen && <Sidebar />}
        <main className="main">
          {/* Main content goes here */}
          <button onClick={handleSidebarToggle}>Toggle Sidebar</button>
        </main>
      </div>
    </div>
  )
}

export default Landingpage;
