import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Navbar from '../navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <h1 className="main-title">What Do You Want To Do Today?</h1>

        <div className="action-cards">
          <div
            className="action-card earn-card"
            onClick={() => navigate('/EarnHomePage')} // Navigate to Earn page
          >
            <h2>EARN</h2>
          </div>

          <div
            className="action-card learn-card"
            onClick={() => navigate('/learn')} // Navigate to Learn page
          >
            <h2>LEARN</h2>
          </div>
        </div>
      </main>

      {/* Zeepo Information Section */}
      <section className="zeepo-info">
        <div className="zeepo-section">
          <h2>What Zeepo Provides</h2>
          <ul>
            <li>📚 Skill-based Learning Modules</li>
            <li>🎓 Verified Certifications</li>
            <li>💼 Career-oriented Projects</li>
            <li>🌐 Community Support</li>
          </ul>
        </div>

        <div className="zeepo-section">
          <h2>How Zeepo Works</h2>
          <ol>
            <li>Sign Up and choose your learning path</li>
            <li>Access curated modules & live sessions</li>
            <li>Complete tasks to earn points and badges</li>
            <li>Get certified and job-ready!</li>
          </ol>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Certifications</h4>
          <p>AWS | Microsoft | Six Sigma | Google | Tableau</p>
        </div>
        <div className="footer-section">
          <h4>Skills</h4>
          <p>Web Dev | Data Science | AI | SQL</p>
        </div>
        <div className="footer-section">
          <h4>Zeepo</h4>
          <p>About Us | Careers | Contact | Blog</p>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>Help Center | FAQs | Accessibility</p>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Zeepo, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;