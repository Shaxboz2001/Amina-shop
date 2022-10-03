import React from 'react'
import Benefit from '../components/benefit/Benefit'
import BestSeller from '../components/bestSeller/BestSeller'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Product from '../components/products/Product'

const Home = () => {
  return (
    <>
<Navbar />
<Product />
<Benefit />
<BestSeller />
<Footer />
    </>
  )
}

export default Home