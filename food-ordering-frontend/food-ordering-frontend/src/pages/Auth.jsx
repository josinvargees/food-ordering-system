import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "../Auth.css";

function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      setMessage("✅ Login Successful!");
      setMessageType("success");

      setTimeout(() => {
        navigate("/home");
      }, 1200);
    } catch (error) {
      setMessage("❌ Login Failed! Invalid Email or Password.");
      setMessageType("error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/auth/register",
        {
          name,
          email,
          password,
        }
      );

      setMessage("✅ Registration Successful! Please Login.");
      setMessageType("success");

      setTimeout(() => {
        setIsLogin(true);
        setMessage("");
      }, 1500);
    } catch (error) {
      setMessage("❌ Registration Failed! Email already exists.");
      setMessageType("error");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-overlay">
        <div className="auth-card">

          <div className="text-center mb-3">
            <FaUtensils className="logo-icon" />
            <h1>Welcome Back</h1>
            <p>
              Login to continue ordering delicious food.
            </p>
          </div>

          <div className="auth-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(true);
                setMessage("");
              }}
            >
              Login
            </button>

            <button
              className={!isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(false);
                setMessage("");
              }}
            >
              Register
            </button>
          </div>

          {message && (
            <div
              className={
                messageType === "success"
                  ? "auth-message success"
                  : "auth-message error"
              }
            >
              {message}
            </div>
          )}

          <form onSubmit={isLogin ? handleLogin : handleRegister}>{!isLogin && (
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaEnvelope />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaLock />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="input-group-text password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 auth-btn"
            >
              {isLogin ? "Login" : "Register"}
            </button>

          </form>

          <div className="text-center mt-4">

            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => {
                    setIsLogin(false);
                    setMessage("");
                  }}
                >
                  Register
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => {
                    setIsLogin(true);
                    setMessage("");
                  }}
                >
                  Login
                </span>
              </p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Auth;