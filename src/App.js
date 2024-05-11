import React from "react";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import MenuPage from "./pages/menu/Menu";
import ContactPage from "./pages/contact/Contact";
import GalleryPage from "./pages/gallery/Gallery";
import { Navigate, Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/" element={<Navigate replace to="/home" />} />
  </Routes>
);

export default App;
