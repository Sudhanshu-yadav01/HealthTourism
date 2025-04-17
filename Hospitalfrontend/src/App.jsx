"use client"

import "./App.css"
import { useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart.jsx"
import AddProduct from "./components/AddProduct"
import Product from "./components/Product"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./Context/Context"


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import LandingPage from "./components/LandingPage.jsx"

function App() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")

  const handleFilters = (category, country) => {
    if (category !== undefined) {
      setSelectedCategory(category)
    }
    if (country !== undefined) {
      setSelectedCountry(country)
    }
    console.log("Selected category:", category, "Selected country:", country)
  }

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id)
    if (existingProduct) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar onSelectCategory={handleFilters} />
        <LandingPage />
        <Routes>
          <Route
            path="/"
            element={
              <Home addToCart={addToCart} selectedCategory={selectedCategory} selectedCountry={selectedCountry} />
            }
          />

          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
    
  )
}


export default App
