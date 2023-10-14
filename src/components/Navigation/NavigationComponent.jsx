import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/Home'
import Categories from '../../../Pages/Categories'
import About from '../../../Pages/About'
import Contact from '../../../Pages/Contact'
import Detail from '../../../pages/Detail'
import Cart from "../../../Pages/Cart"
import Checkout from '../../../Pages/Checkout'

const NavigationComponent = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detalle/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:orderId" element={<Checkout />} />
        </Routes>
    </div>
  )
}

export default NavigationComponent
