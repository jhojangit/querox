import "./App.css";
import CardProducts from "./assets/components/products/CardProducts";
import React, { useEffect } from "react";
import FilterProducts from "./assets/components/filter/FilterProducts";
import Navbar from "./assets/components/navbar/navbar";

function App() {




  return <div className="App">

    <header>
    
      <Navbar />
    </header>

    <main>
      <FilterProducts />
      <CardProducts />
    </main>


  </div>;
}

export default App;
