import "./Customcard.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CustomCard({ image, title, price, description, btnName }) {
  const { addToCart } = useContext(CartContext);

  const handleCart = () => {
    addToCart({ image, title, price, description });
  };
  return (
    <div className="custom-card card" style={{ width: "18rem" }}>
      <img src={image} class="card-img-top card-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h5>
        <p className="card-text price-text">${price}</p>
        <p className="card-text">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>
        <button onClick={handleCart} className="btn btn-primary">
          {btnName}
        </button>
      </div>
    </div>
  );
}
export default CustomCard;
