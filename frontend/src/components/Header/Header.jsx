import React from "react";
import "./Header.css";
import headerImg from "../../assets/header_img.png"; // Đường dẫn chính xác

const Header = () => {
  return (
    <div className="header">
      <img
        src={headerImg}
        alt="Header Background"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="header-contents">
        <h2>
          ベトナム <br /> 料理なら
        </h2>
        <h1>BETOFO</h1>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
