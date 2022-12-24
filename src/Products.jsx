import {useState, useEffect} from "react";

import useFetch from "./useFetch.js";
import Product from "./Product.jsx";
import Loader from "./Loader.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const {loading, get} = useFetch("http://localhost:3000/");
  //console.log(loading);

  useEffect(() => {
    get("supermarket")
    .then(data => {
      setProducts(data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      {loading && <Loader />}
      <div className="products-grid">
        {products.map(product => {
          return <Product key={product.id} details={product}/>
        })}
      </div>
    </div>
  )
}