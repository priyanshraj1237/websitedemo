// LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      // Simulate a successful login
      alert("Login Successful!");
      navigate("/home");
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate a successful Google login
      alert("Google Sign-In Successful!");
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          {error && <p className="error">{error}</p>}

          <button className="login-btn" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <button className="google-btn" onClick={handleGoogleLogin} disabled={loading}>
            <FcGoogle size={20} /> {loading ? "Signing in..." : "Login with Google"}
          </button>

          <div className="auth-links">
            <p>Not signed up? <Link to="/signup">Sign Up</Link></p>
            <p><Link to="/reset-password">Forgot Password?</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
