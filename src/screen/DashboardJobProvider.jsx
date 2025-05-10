import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
 // Import Sidebar component
import JpMyProjects from './JpMyprojects'; // Define MyProjects component
import ManageBids from '../component/ManageBids'; // Define Bids component
import PaymentStatus from '../component/PaymentStatus'; // Import PaymentStatus component
import ProfilePage from '../component/ProfilePage'; // Define ProfilePage component
import ProjectReview from '../component/ProjectReview'; // Project Review component
import ProjectAnalytics from '../component/ProjectAnalytics'; // Project Analytics component
// Messaging System component// Notifications component // Contracts Download component
import JSidebar from '../components/JSidebar';

const JobProviderDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Component */}
      <JSidebar />

      {/* Dashboard Content */}
      <div style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#333' }}>Job Provider Dashboard</h2>

        {/* Dashboard Routes */}
        <Routes>
          <Route path="/Jpmyprojects" element={<JpMyProjects />} />
          <Route path="/ManageBids" element={<ManageBids />} />
          <Route path="/paymentstatus" element={<PaymentStatus />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project-review" element={<ProjectReview />} />
          <Route path="/project-analytics" element={<ProjectAnalytics />} />
        </Routes>
      </div>
    </div>
  );
};

export default JobProviderDashboard;
