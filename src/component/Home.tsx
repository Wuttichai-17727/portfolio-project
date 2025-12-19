// import React from 'react'

import Advertise from "../feature/Advertise"
import Navbar from "../feature/Navbar"
import ProductList from "../feature/ProductList"
import Category from "../feature/Category"
import Footer from "../feature/footer"
const Home = () => {
  return (
    <>
        <Navbar/>
        <Advertise/>
        <ProductList/>
        <Category/>
        <Footer/>
    </>
  )
}

export default Home
