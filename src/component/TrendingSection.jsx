import React, { useState } from 'react';
import { FaLaptop, FaMobileAlt, FaPalette } from 'react-icons/fa';
import '../styles/TrendingSection.css';

/**
 * TrendingSection: horizontally scrollable cards within a full-width background box.
 */
const TrendingSection = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    { icon: <FaLaptop />,   title: 'Web Dev',    description: 'Responsive websites.' },
    { icon: <FaMobileAlt />, title: 'Mobile Apps', description: 'iOS & Android apps.' },
    { icon: <FaPalette />,   title: 'Design',     description: 'User-friendly interfaces.' }
  ];

  const filtered = filter === 'All'
    ? categories
    : categories.filter(c => c.title === filter);

  return (
    <section className="trending-section">
      <h2 className="section-title">Trending</h2>

      <div className="filter-buttons">
        {['All', ...categories.map(c => c.title)].map((label, idx) => {
          const isActive = filter === label;
          const icon = categories.find(c => c.title === label)?.icon;
          return (
            <button
              key={idx}
              className={`filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => setFilter(label)}
            >
              {label !== 'All' && <span className="btn-icon">{icon}</span>}
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      <div className="trending-grid horizontal-scroll">
        {filtered.map((category, idx) => (
          <article
            key={idx}
            className={`trending-card ${category.title === filter ? 'highlighted' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={category.title}
          >
            <div className="icon-wrapper">
              <div className="icon-circle">{category.icon}</div>
            </div>
            <h3 className="card-title">{category.title}</h3>
            <p className="card-desc">{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;



