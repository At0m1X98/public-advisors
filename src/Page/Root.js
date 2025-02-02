import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Root = () => {
  return (
    <div className='root'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root
