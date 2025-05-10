import React from 'react';
import '../styles/EarnHomePage.css';
import Header from '../component/Header';
import ActionBoxes from '../component/ActionBoxes';
import TrendingSection from '../component/TrendingSection';

const EarnHomePage = () => {
  return (
    <div className="earn-homepage">
      <div className="top-section">
        <div className="header">
          <Header />
        </div>
        <div className="action-boxes-wrapper">
          <ActionBoxes />
        </div>
      </div>

      <div className="trending-section">
        <TrendingSection />
      </div>
    </div>
  );
};

export default EarnHomePage;
