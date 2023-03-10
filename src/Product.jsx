import {Link} from "react-router-dom";

import Button from "./Button.jsx";

export default function Product(props) {
  const {details, cart, onProductAdd, onProductDelete} = props;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`} >
          <img src={details.image} width="100" height="100" className="product-image" alt={details.name} />
        </Link>
        <div className="product-quantity-container">
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
            <Button className="product-delete" onClick={() => onProductDelete(details.id)} >x</Button>
        </div>
        <Button onClick={() => onProductAdd(details)}>${details.price}</Button>
      </div>
    </div>
  )
}