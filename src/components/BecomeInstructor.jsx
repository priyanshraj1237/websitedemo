import React, { useState } from 'react';
import '../styles/BecomeInstructor.css'; // Import your CSS file for styling
//         category: 'Mobile Development',

const BecomeInstructor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expertise: '',
    bio: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Instructor Application:', formData);
    setSubmitted(true);
    // You can send this data to your backend/Firebase here
  };

  return (
    <div className="instructor-container">
      <h2>Become an Instructor</h2>
      {submitted ? (
        <div className="success-message">🎉 Thanks! We’ll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="instructor-form">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Area of Expertise
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Short Bio
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>

          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default BecomeInstructor;
