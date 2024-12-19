// import React, { useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/assets";

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Sign Up");

//   return (
//     <div className="login-popup">
//       <div className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>{" "}
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt=""
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === "Sign Up" ? (
//             <input type="text" placeholder="Your name" />
//           ) : (
//             <></>
//           )}
//           <input type="email" placeholder="Your email" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <button>{currState === "Login" ? "Login" : "Create account"}</button>
//         <div className="login-popup-condition">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         {currState === "Login" ? (
//           <p>
//             Create a new account?{" "}
//             <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setCurrState("Login")}>Login here</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;
import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up"); // "Sign Up" hoặc "Login"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Hàm xử lý submit
  const handleSubmit = async () => {
    const url = currState === "Sign Up" ? "/signup.php" : "/login.php"; // Đặt URL dựa trên trạng thái
    try {
      const response = await axios.post(
        `http://localhost:8888${url}`,
        formData
      );
      const { status, message } = response.data;

      if (status === "success") {
        alert(message); // Thông báo thành công
        setShowLogin(false); // Đóng popup
      } else {
        setErrorMessage(message); // Hiển thị lỗi từ server
      }
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSubmit}>
          {currState === "Login" ? "Login" : "Create account"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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

export default LoginPopup;
