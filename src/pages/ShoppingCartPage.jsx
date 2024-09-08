import React from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-content">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.length > 0
            ? cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.thumbnail} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="quantity">
                      <button onClick={() => decrementQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <br />
                    <button
                      className="del-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            : "Your Cart is empty"}
        </div>
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button onClick={() => alert("To be implemented!")}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
