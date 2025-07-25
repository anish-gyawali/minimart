import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-5">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <ul>
          {cart.map((item, key) => (
            <li key={key}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CartPage;
