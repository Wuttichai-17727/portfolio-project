import { useState } from "react";
import Advertise from "../feature/Advertise"
import Navbar from "../feature/Navbar"
import ProductList from "../feature/ProductList"
import Category from "../feature/Category"
import Footer from "../feature/footer"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
        <Navbar onSearch={(value) => setSearchTerm(value)} />
        <Advertise/>
        <ProductList searchTerm={searchTerm} />
        <Category/>
        <Footer/>
    </>
  )
}

export default Home
