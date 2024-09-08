import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./PlantCard.css";

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setAdded(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.thumbnail} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
