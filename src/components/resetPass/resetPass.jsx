// ResetPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resetPass.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      setError("Please enter your email!");
      return;
    }

    // Simulated email sending
    setError("");
    setTimeout(() => {
      setMessage("Password reset email sent! Check your inbox.");
    }, 1000);
  };

  return (
    <div className="login-page">
        <div className="reset-container">
        <h2>Reset Password</h2>

        <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="reset-input"
        />

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <button className="reset-btn" onClick={handleResetPassword}>
            Send Reset Link
        </button>

        <p className="switch-auth">
            Back to <Link to="/login">Login</Link>
        </p>
        </div>
    </div>

  );
};

export default ResetPassword;
