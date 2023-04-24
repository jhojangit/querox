import "./App.css";
import CardProducts from "./assets/components/products/CardProducts";
import React, { useEffect } from "react";
import FilterProducts from "./assets/components/filter/FilterProducts";
import Navbar from "./assets/components/navbar/NavbarComponent";

function App() {




  return <div className="App">

    <header>
      <Navbar />
    </header>

    <main>
      <FilterProducts />
      <CardProducts />
      <div className="whats">
        <a target="_blank" aria-label="Compra por WhatsApp" href="https://wa.me/573133028169?text= ¡Hola! Quisiera averigurar un producto"> <img alt="Chat on WhatsApp" src="public/logo/WhatsAppButtonGreenSmall.png" /> </a>
      </div>
    </main>s

    

  </div>;
}

export default App;
