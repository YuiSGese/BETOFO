import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>{" "}
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "Login" ? "Login" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};
// update
const handleFormSubmit = () => {
  const endpoint = currState === "Sign Up" ? "signup.php" : "login.php";
  const data = {
    name:
      currState === "Sign Up"
        ? document.querySelector("input[type='text']").value
        : null,
    email: document.querySelector("input[type='email']").value,
    password: document.querySelector("input[type='password']").value,
  };

  fetch(`http://localhost:8888/backend/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => alert(data.message))
    .catch((error) => console.error("Error:", error));
};
<button onClick={handleFormSubmit}>
  {currState === "Login" ? "Login" : "Create account"}
</button>;
export default LoginPopup;
