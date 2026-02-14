import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Allitems from "./pages/Allitems"
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Transaction from "./pages/transaction";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Allitems" element={<Allitems />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App