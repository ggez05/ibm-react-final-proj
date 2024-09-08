import React from "react";
import PlantCard from "../components/PlantCard";
import { useCart } from "../context/CartContext";
import "./ProductListingPage.css";

import aloeVeraImg from "../assets/aloe-vera.jpg";
import bambooPlantImg from "../assets/bamboo.jpg";
import lavenderImg from "../assets/lavendar.jpeg";
import monsteraImg from "../assets/mons.jpg";
import rosemaryImg from "../assets/rosemary.jpg";
import spiderPlantImg from "../assets/spider-plant.jpeg";
import Header from "../components/Header";

const plants = [
  {
    id: 1,
    category: "Air Purifying",
    name: "Bamboo plant",
    price: 18,
    thumbnail: bambooPlantImg,
  },
  {
    id: 2,
    category: "Air Purifying",
    name: "Spider Plant",
    price: 20,
    thumbnail: spiderPlantImg,
  },
  {
    id: 3,
    category: "Aromatic",
    name: "Lavender",
    price: 14,
    thumbnail: lavenderImg,
  },
  {
    id: 4,
    category: "Aromatic",
    name: "Rosemary",
    price: 16,
    thumbnail: rosemaryImg,
  },
  {
    id: 5,
    category: "Ornamental",
    name: "Aloe Vera",
    price: 8,
    thumbnail: aloeVeraImg,
  },
  {
    id: 6,
    category: "Ornamental",
    name: "Monstera plant",
    price: 34,
    thumbnail: monsteraImg,
  },
];
const categories = ["Air Purifying", "Aromatic", "Ornamental"];

const ProductListingPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-listing-page">
      <Header />
      <div className="products">
        {categories.map((category) => (
          <div key={category}>
            <div className="prod-head">
              <h2>{category}</h2>
            </div>
            <div className="plant-cards">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
