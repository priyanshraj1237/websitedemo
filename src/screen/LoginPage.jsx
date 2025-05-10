import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "../context/firebaseSetup";
import { FcGoogle } from "react-icons/fc";
import "../styles/LoginPage.css";

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

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful!");
      navigate("/home");
    } catch (err) {
      setError("Google Sign-In failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default LoginPage;