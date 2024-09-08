import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background-image.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="landing-wrap">
        <div className="landing-content">
          <h1>Weclome to Paradise Nursery</h1>
          <p>Where green meets serenity.</p>
          <hr style={{ color: "green", width: "70px", marginBottom: "30px" }} />
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
        <div
          className="landing-content"
          style={{
            fontSize: "17px",
            textAlign: "left",
            width: "63%",
            paddingRight: "6%",
          }}
        >
          Welcome, your go-to online nursery for all things green! We offer a
          wide variety of plants to bring life and beauty to your home or
          garden. Whether you're looking for vibrant indoor plants, lush outdoor
          greenery, or easy-care succulents, we've got something for every plant
          lover. Our collection includes flowering plants, herbs, decorative
          pots, and gardening essentials, all carefully curated to meet your
          needs. Enjoy hassle-free shopping, expert care tips, and fast
          delivery, making it easier than ever to grow your green oasis. Start
          your plant journey with us today!
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
