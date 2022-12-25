import {useEffect, useState} from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

import useFetch from "./useFetch";
import Loader from "./Loader";

export default function ProductDetails() {
  const {loading, get} = useFetch("http://localhost:3000/");
  const [details, setDetails] = useState({});

  const {id} = useParams();
  
  useEffect(() => {
    get(`productinfo/${id}`)
    .then(data => {
      setDetails(data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="product-details-layout">
      <div>
        <h2>{details.name}</h2>
        <img src={details.image} width="125" height="125" className="product-details-image" alt={details.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                to={`/products/${details.id}`} end
                className={({isActive}) => isActive ? "tab-active" : ""}
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/products/${details.id}/nutrition`}
                className={({isActive}) => isActive ? "tab-active" : ""}
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/products/${details.id}/storage`}
                className={({isActive}) => isActive ? "tab-active" : ""}
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={details}/>
      </div>
    </div>
  );
}