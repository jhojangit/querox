import "./App.css";
import CardProducts from "./assets/components/products/CardProducts";
import React, { useEffect } from "react";
import FilterProducts from "./assets/components/filter/FilterProducts";
import Navbar from "./assets/components/navbar/NavbarComponent";
import Footer from "./assets/components/footer/Footer";

function App() {




  return <div className="App">

    <header>
      <Navbar />
    </header>

    <main>
      <FilterProducts />
      <CardProducts />

    </main>

    <footer>
      <Footer/>
    </footer>


  </div>;
}

export default App;
