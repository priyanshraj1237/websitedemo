import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const [isPaid, setIsPaid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    const course = {
      id: 1,
      title: 'GenAI for Beginners',
      price: 549
    };
  
    // Save the enrolled course to localStorage
    localStorage.setItem('enrolledCourse', JSON.stringify(course));
  
    setIsPaid(true);
    setShowSuccess(true);
  
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  

  return (
    <div style={{ display: 'flex', backgroundColor: '#f9fafb', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Left Section */}
      <div style={{ flex: 2, marginRight: '40px', backgroundColor: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>Checkout</h2>

        <h4 style={{ marginBottom: '8px' }}>1. Account details (<span style={{ color: '#16a34a' }}>saisangita.adhek05@gmail.com</span>)</h4>
        <hr style={{ marginBottom: '20px' }} />

        <h4 style={{ marginBottom: '8px' }}>2. Billing address & Payment method</h4>
        <label>Country</label><br />
        <select style={selectStyle}><option>India</option></select>

        <label>State / Union Territory</label><br />
        <select style={selectStyle}><option>Please select...</option></select>

        <div>
          <h4 style={{ margin: '20px 0 10px' }}>Cards</h4>
          <input type="text" placeholder="Card number" style={inputStyle} /><br />
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <input type="text" placeholder="MM/YY" style={{ ...inputStyle, flex: 1 }} />
            <input type="text" placeholder="CVC" style={{ ...inputStyle, flex: 1 }} />
          </div>
          <input type="text" placeholder="Name on card" style={{ ...inputStyle, marginTop: '10px' }} />
          <div style={{ marginTop: '10px' }}>
            <input type="checkbox" /> <label>Securely save this card for my later purchase</label>
          </div>

          <div style={otherOptionStyle}><input type="radio" name="pay" /> <label>UPI</label></div>
          <div style={otherOptionStyle}><input type="radio" name="pay" /> <label>Net Banking</label></div>
          <div style={otherOptionStyle}><input type="radio" name="pay" /> <label>Mobile Wallets</label></div>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, backgroundColor: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)', height: 'fit-content' }}>
        <h3 style={{ marginBottom: '20px' }}>Order summary</h3>
        <p>Original Price: <span style={{ float: 'right' }}>₹2,699</span></p>
        <p>Discount (80% Off): <span style={{ float: 'right', color: '#10b981' }}>-₹2,150</span></p>
        <hr />
        <p><strong>Total (1 course):</strong> <span style={{ float: 'right', fontSize: '18px' }}>₹549</span></p>

        {showSuccess ? (
          <div style={{ marginTop: '20px', backgroundColor: '#d1fae5', padding: '12px', borderRadius: '8px', color: '#065f46' }}>
            ✅ Transaction Completed! Redirecting to dashboard...
          </div>
        ) : (
          <button onClick={handlePayment} style={payButtonStyle}>🔒 Pay ₹549</button>
        )}

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
          <p><strong>30-Day Money-Back Guarantee</strong><br />
          Not satisfied? Get a full refund within 30 days. Simple and straightforward!</p>
        </div>

        <div style={{ marginTop: '20px', fontSize: '14px', padding: '12px', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
          🔥 Tap into Success Now <br />
          <strong>Join 100+ people</strong> in your country who've recently enrolled in this course within last 24 hours.
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  width: '100%',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '10px'
};

const selectStyle = {
  padding: '8px',
  width: '100%',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const otherOptionStyle = {
  marginTop: '12px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f9fafb',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const payButtonStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '12px',
  backgroundColor: '#7c3aed',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer'
};
