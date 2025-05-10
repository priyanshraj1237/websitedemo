import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';  // Import the Sidebar component
import MyProjects from '../screen/MyProjects';  // Corrected file path
import Bids from '../component/Bid';  // Corrected file path
import Wallet from '../component/Wallet';  // Corrected file path
import Reviews from '../component/ReviewsSection';  // Corrected file path
import ProfilePage from '../component/ProfilePage';  // Corrected file path
import TaskManagement from '../component/TaskManagement';  // Corrected file path

const FreelancerDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />  {/* Sidebar Component on the left */}
      
      <div style={{ marginLeft: "250px", padding: "20px", flex: 1 }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#333" }}>
          Freelancer Dashboard
        </h2>
        
        {/* Routing for different sections */}
        <Routes>
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/task-management" element={<TaskManagement />} />  {/* Updated path */}
        </Routes>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
