import React from 'react'
import FavouritePoetry from '../../component/Favourite/FavouritePoetry'
import Footer from '../../component/Footer/Footer'
import Home from '../../component/Home/Home'
import LandingPage from '../../component/Landing/LandingPage'
import LatestPoetry from '../../component/Latest/LatestPoetry'
import Poetry from '../../component/Poetry/Poetry'

function main() {
  return (
    <div>
      <LandingPage/>
      <Home/>
      <LatestPoetry/>
      <Poetry/>
      <FavouritePoetry/>
      <Footer/>
    </div>
  )
}

export default main
