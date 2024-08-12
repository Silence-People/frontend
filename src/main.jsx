import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./main_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./main_page/signup/Signup";
import AboutPage from "./main_page/about/AboutPage";
import ProductsPage from "./main_page/products/ProductsPage";
import PricingPage from "./main_page/pricing/PricingPage";
import SupportPage from "./main_page/support/SupportPage";
import Navbar from "./main_page/Navbar";
import Footer from "./main_page/Footer";
import NotFound from "./main_page/NotFound";
import Login from "./main_page/login/Login";

//Study Output and find the necessary components and make them even if its empty.
//Slowly fill the empty repo as long as you find necessary.
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
