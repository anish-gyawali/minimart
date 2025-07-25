import "./Navbar.css";
import logo from "../assets/InsightProof.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Navbar() {
  const{cart} = useContext(CartContext)
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          <span>InsightProof</span>
        </a>

        <ul className="navbar-links list-unstyled d-flex mb-0">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/product">Product</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/cart" className="text-dark position-relative me-4">
          <FaShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
