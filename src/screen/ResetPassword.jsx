import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebaseSetup";

import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError("Error sending reset email. Try again.");
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>

      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="reset-input" />
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <button className="reset-btn" onClick={handleResetPassword}>Send Reset Link</button>

      <p className="switch-auth">
        Back to <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
