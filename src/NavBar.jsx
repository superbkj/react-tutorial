import {Link, NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/">SuperM</Link>
      <ul>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/cart">Cart (0)</NavLink>
        </li>
      </ul>
    </nav>
  )
}