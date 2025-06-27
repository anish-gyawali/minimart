import "./Navbar.css";
import logo from "../assets/InsightProof.png";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
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
            <a href="#">Home</a>
          </li>
          <li className="mx-3">
            <a href="#">Product</a>
          </li>
          <li className="mx-3">
            <a href="#">Contact</a>
          </li>
        </ul>

        <a href="#" className="text-dark">
          <FaShoppingCart size={20} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
