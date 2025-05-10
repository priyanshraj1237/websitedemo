// SignUpPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./signup.css";

const SignUpPage = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    setTimeout(() => {
      alert("Account created successfully!");
      navigate("/"); // Simulated redirect
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    setError("");
    setTimeout(() => {
      alert("Google Sign-Up Successful!");
      navigate("/"); // Simulated redirect
    }, 1000);
  };

  return (
    <div className="signup-page">
        <div className="signup-container">
        <h2>Sign Up</h2>

        <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
        />

        <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
        />

        <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
        />

        {error && <p className="error">{error}</p>}

        <button className="signup-btn" onClick={handleSignUp}>
            Sign Up
        </button>

        <button className="google-btn" onClick={handleGoogleSignUp}>
            <FcGoogle size={20} /> Sign Up with Google
        </button>

        <p className="switch-auth">
            Already have an account? <a href="/login">Login</a>
        </p>
        </div>
    </div>
  );
};

export default SignUpPage;
