import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';  // Make sure this path is correct for your Header component

const FreelancerList = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Freelancer data
  const freelancers = [
    {
      id: 1,
      name: 'Alice Johnson',
      skills: ['React', 'Node.js'],
      bio: 'Frontend developer with 4+ years of experience building interactive websites.',
      rate: '$25/hr',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Bob Smith',
      skills: ['UI/UX', 'Figma'],
      bio: 'Creative designer with a focus on user-first design, crafting intuitive interfaces.',
      rate: '$30/hr',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Clara Gomez',
      skills: ['Python', 'Django'],
      bio: 'Backend developer specializing in building scalable APIs and complex systems.',
      rate: '$28/hr',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  // Function to navigate to Freelancer Hire Form
  const handleHireClick = (freelancerId) => {
    navigate(`/hire/${freelancerId}`);  // Navigate directly to the Freelancer Hire Form
  };

  return (
    <div className="freelancer-list-container">
      <Header /> {/* Include Header component */}
      <section className="freelancer-section">
        <h2 className="section-title">Top Talent, Just a Click Away</h2>
        <div className="freelancer-list">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="freelancer-card">
              <div className="freelancer-avatar">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="avatar"
                />
              </div>
              <div className="freelancer-details">
                <h3>{freelancer.name}</h3>
                <p className="bio">{freelancer.bio}</p>
                <div className="skills">
                  {freelancer.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="rate">{freelancer.rate}</p>
                <button
                  className="hire-btn"
                  onClick={() => handleHireClick(freelancer.id)} // Navigate to the hire form
                >
                  Hire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        /* Freelancer List Container */
        .freelancer-list-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
          margin-top: 60px; /* Adjusted for top margin */
        }

        /* Section Styling */
        .freelancer-section {
          flex-grow: 1;
          padding: 60px 20px;
          margin-top: 50px;
          margin-bottom: 50px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 40px;
        }

        /* Freelancer List Styling */
        .freelancer-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .freelancer-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 20px;
          width: 100%;
          max-width: 700px;
          justify-content: space-between;
          background-color: #f9f9f9; /* Subtle background */
          border: 1px solid #ddd;
          border-radius: 10px;
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .freelancer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        }

        /* Avatar Styling */
        .freelancer-avatar {
          flex-shrink: 0;
          margin-right: 20px;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ffffff;
        }

        /* Freelancer Details */
        .freelancer-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          flex-grow: 1;
        }

        .freelancer-details h3 {
          font-size: 1.5rem;
          color: #333;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .bio {
          font-size: 1rem;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .skills {
          display: flex;
          justify-content: flex-start;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .skill-tag {
          background-color: #007bff;
          color: #fff;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .rate {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .hire-btn {
          background-color: #28a745;
          color: white;
          font-size: 1rem;
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .hire-btn:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .freelancer-card {
            width: 100%;
            max-width: none;
            flex-direction: column;
            align-items: center; /* Center align items on mobile */
            padding: 15px;
          }

          .avatar {
            width: 100px;
            height: 100px;
          }

          .section-title {
            font-size: 2rem;
          }

          .bio {
            font-size: 0.9rem;
          }

          .hire-btn {
            margin-top: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default FreelancerList;
