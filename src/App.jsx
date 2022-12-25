import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";

import Button from "./Button.jsx";
import Input from "./Input.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProductDetailInfo from "./ProductDetailInfo.jsx";
import ProductDetailNutrition from "./ProductDetailNutrition.jsx";
import ProductDetailStorage from "./ProductDetailStorage.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function handleProductAdd(newProduct) {
    console.log("Adding product " + newProduct.id);
  }

  function handleProductDelete(id) {
    console.log("Deleting product " + id);
  }

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          }></Route>
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailInfo />}></Route>
            <Route path="nutrition" element={<ProductDetailNutrition />}></Route>
            <Route path="storage" element={<ProductDetailStorage />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
