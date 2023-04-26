import "./App.css";
import CardProducts from "./assets/components/products/CardProducts";
import React, { useEffect } from "react";
import FilterProducts from "./assets/components/filter/FilterProducts";
import Navbar from "./assets/components/navbar/NavbarComponent";
import Footer from "./assets/components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PoliciesPage from "./pages/PoliciesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

function App() {




  return <div className="App">

    <header>
      <Navbar />
    </header>

    <Routes>
      <Route path="/" element={<ProductsPage/>}/>
      <Route path="/nosotros" element={<AboutPage/>}/>
      <Route path="/venta" element={<PoliciesPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>



    <footer>
      <Footer/>
    </footer>


  </div>;
}

export default App;
