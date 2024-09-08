import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.png";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-werr">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Paradise Nursery Logo" className="logo-img" />
          </Link>
        </div>
        <div className="tagline">
          <span>Paradise Nursery</span>
          <p>Where Green Meets Serenity!</p>
        </div>
      </div>
      <div className="nav">
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
