import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Button from "./Button.jsx";
import Input from "./Input.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
