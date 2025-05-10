import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FreelancerHireForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { freelancerId, freelancerName } = location.state || {}; 

  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    companyName: '',
    budget: '',
    deadline: '',
    freelancerId: freelancerId || '',
    freelancerName: freelancerName || '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Hire Form:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/freelancerlist');
    }, 2000);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '50px auto',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
      fontFamily: `'Roboto', sans-serif`,
      animation: 'fadeIn 0.5s ease-in-out',
      overflow: 'hidden',
    },
    header: {
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: '#fff',
      padding: '20px 30px',
      fontSize: '26px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
    },
    backIcon: {
      cursor: 'pointer',
      fontSize: '22px',
      color: '#fff',
      transition: 'transform 0.2s ease',
    },
    form: {
      padding: '30px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#34495e',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      marginBottom: '20px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
    },
    inputFocus: {
      borderColor: '#2575fc',
      boxShadow: '0 0 10px rgba(37, 117, 252, 0.4)',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      fontSize: '16px',
      resize: 'vertical',
      minHeight: '120px',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#2575fc',
      color: '#fff',
      fontWeight: '600',
      fontSize: '17px',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 10px rgba(37, 117, 252, 0.2)',
    },
    buttonHover: {
      backgroundColor: '#1a5edb',
    },
    readOnly: {
      backgroundColor: '#f1f1f1',
      cursor: 'not-allowed',
    },
    toast: {
      background: '#2ecc71',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '20px auto 0',
      width: 'fit-content',
      fontWeight: 'bold',
      boxShadow: '0 4px 10px rgba(46, 204, 113, 0.3)',
      animation: 'slideIn 0.5s ease-out',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FaArrowLeft
          style={styles.backIcon}
          onClick={() => navigate('/freelancerlist')}
          title="Back to Freelancer List"
        />
        Hire {freelancerName || 'a Freelancer'}
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="e.g. Build an eCommerce app"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
          onBlur={(e) => e.target.style = styles.input}
        />

        <label style={styles.label}>Job Description</label>
        <textarea
          name="jobDescription"
          placeholder="Brief about the work"
          value={formData.jobDescription}
          onChange={handleChange}
          required
          style={styles.textarea}
        />

        <label style={styles.label}>Company / Your Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Your name or company"
          value={formData.companyName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Budget (USD)</label>
        <input
          type="number"
          name="budget"
          placeholder="e.g. 500"
          value={formData.budget}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Freelancer</label>
        <input
          type="text"
          value={freelancerName || `ID: ${freelancerId}`}
          readOnly
          style={{ ...styles.input, ...styles.readOnly }}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit Hire Request
        </button>

        {submitted && <div style={styles.toast}>✔ Hire Request Sent Successfully!</div>}
      </form>
    </div>
  );
};

export default FreelancerHireForm;
