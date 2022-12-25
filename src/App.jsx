import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

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

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
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
