import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.tsx";
import Photos from "./Components/Photos";
import React from "react";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}