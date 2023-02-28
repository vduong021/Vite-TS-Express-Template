
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Logs from './Logs'
// import Search from "./Search";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/search" element={<Search />} /> */}
    </Routes>
  )
}

export default App
