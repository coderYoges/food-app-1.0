import React from "react";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import MenuPage from "./pages/menu/Menu";
import ContactPage from "./pages/contact/Contact";
import GalleryPage from "./pages/gallery/Gallery";
import AdminPage from "./pages/admin";
import { Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

const App = ({ isAuthenticated }) => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route
      path="/admin"
      element={
        isAuthenticated ? <AdminPage /> : <Navigate replace to="/home" />
      }
    />
    <Route path="/" element={<Navigate replace to="/home" />} />
  </Routes>

);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
