import React from 'react'
import './Landingpage.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function Landingpage() {
  return (
    <div className='landing--page'>
        <Navbar/>
        <div className="content">
        <Sidebar />
        <main className="main">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  )
}

export default Landingpage