import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import Header from "./components/Header/Header";

import { useLocation } from "react-router-dom";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // Danh sách các trang không muốn hiển thị Header
  const noHeaderRoutes = ["/cart", "/order", "/myorder"];

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />

      {/* Chỉ hiển thị Header nếu không nằm trong noHeaderRoutes */}
      {!noHeaderRoutes.includes(location.pathname) && <Header />}

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorder" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
