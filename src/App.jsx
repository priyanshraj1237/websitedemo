import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Earn Section
import EarnHomePage from './screen/EarnHomePage';
import ProjectList from './component/ProjectList';
import ProjectPostForm from './component/ProjectPostForm';
import FreelancerList from './component/FreelancerList';
import FreelancerHireForm from './component/FreelancerHireForm';
import ProjectDetailPage from './component/ProjectDetailPage';
import FreelancerDashboard from './screen/FreelancerDashboard';
import DashboardJobProvider from './screen/DashboardJobProvider';
import ProfilePage from './component/ProfilePage';
import JpMyprojects from './screen/JpMyprojects';
import Bids from './component/Bid';
import ManageBids from './component/ManageBids';
import PaymentStatus from './component/PaymentStatus';
import ProjectAnalytics from './component/ProjectAnalytics';
import ProjectProgressTracker from './component/ProjectProgressTracker';
import ProjectReview from './component/ProjectReview';
import ReviewsSection from './component/ReviewsSection';
import TaskManagement from './component/TaskManagement';
import MyProjects from './screen/MyProjects';

import BecomeInstructor from './components/BecomeInstructor.jsx';
import { Wallet } from 'lucide-react';

// Learn Section
import Home from './components/home/home.jsx';
import LearnSection from './components/learn/learn1.jsx';
import Dashboard from './components/dashboard.jsx';
import AboutUs from './components/aboutus.jsx';
import FAQ from './components/faq.jsx';
import CourseDetails from './components/coursedetails.jsx';
import PaymentPage from './components/Paymentpage.jsx';
import SignUpPage from './components/signup/signup.jsx';
import LoginPage from './components/login/login.jsx';
import ResetPassword from './components/resetpass/resetpass.jsx';
import InstructorForm from './components/InstructorForm.jsx';



const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    
    const initialProjects = [
      {
        id: 1,
        title: 'Web Design',
        description: 'Create a website for a local business',
        category: 'Web Development',
        budget: 500,
        skills: 'HTML, CSS, JavaScript',
      },
      {
        id: 2,
        title: 'Mobile App',
        description: 'Build an iOS app',
        category: 'Mobile Development',
        budget: 1000,
        skills: 'Swift, iOS',
      },
    ];
    setProjects(initialProjects);
  }, []);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { ...newProject, id: Date.now() },
    ]);
  };

  return (
    <Routes>
      {/* Earn Section Routes */}
      <Route path="/EarnHomePage" element={<EarnHomePage />} />
      <Route path="/ProjectList" element={<ProjectList projects={projects} setProjects={setProjects} />} />
      <Route path="/ProjectPostForm" element={<ProjectPostForm onAddProject={handleAddProject} />} />
      <Route path="/FreelancerList" element={<FreelancerList />} />
      <Route path="/hire/:freelancerId" element={<FreelancerHireForm />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
      <Route path="/FreelancerDashboard" element={<FreelancerDashboard />} />
      <Route path="/DashboardJobProvider" element={<DashboardJobProvider />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/JpMyprojects" element={<JpMyprojects />} />
      <Route path="/Bids" element={<Bids />} />
      <Route path="/ManageBids" element={<ManageBids />} />
      <Route path="/PaymentStatus" element={<PaymentStatus />} />
      <Route path="/ProjectAnalytics" element={<ProjectAnalytics />} />
      <Route path="/ProjectProgressTracker" element={<ProjectProgressTracker />} />
      <Route path="/ProjectReview" element={<ProjectReview />} />
      <Route path="/ReviewsSection" element={<ReviewsSection />} />
      <Route path="/TaskManagement" element={<TaskManagement />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/MyProjects" element={<MyProjects />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />

      {/* Learn Section Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearnSection />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/become-instructor" element={<InstructorForm />} />

    </Routes>
  );
};

export default App;
