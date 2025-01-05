import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; // Dùng Link
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar ">
      <div className="navbar-container">
        {/* Sử dụng Link thay cho href */}
        <Link to="/">
          <img className="logo" src={assets.logo} alt="Logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`${menu === "home" ? "active" : ""}`}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={`${menu === "menu" ? "active" : ""}`}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mob-app")}
            className={`${menu === "mob-app" ? "active" : ""}`}
          >
            mobile app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={`${menu === "contact" ? "active" : ""}`}
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right">
          {/* <img src={assets.search_icon} alt="Search" /> */}
          <Link to="/cart" className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Cart" />
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </Link>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
