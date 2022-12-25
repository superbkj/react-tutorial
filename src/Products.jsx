import {useState, useEffect} from "react";

import useFetch from "./useFetch.js";
import Product from "./Product.jsx";
import Loader from "./Loader.jsx";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const {loading, get} = useFetch("https://my-json-server.typicode.com/superbkj/react-tutorial/");
  //console.log(loading);

  useEffect(() => {
    get("products")
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
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          )
        })}
      </div>
    </div>
  )
}