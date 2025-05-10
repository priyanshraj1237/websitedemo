import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FiFileText, FiTag, FiDollarSign, FiEdit, FiTool } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProjectPostForm.css'; // Custom CSS for styling
import Navbar from '../components/ui/Navbar'; // Import Navbar here

const ProjectPostForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = { title, category, budget, description, skills };
    onAddProject(newProject);

    // Reset fields
    setTitle('');
    setCategory('');
    setBudget('');
    setDescription('');
    setSkills('');

    toast.success('✅ Project posted successfully!');
    setTimeout(() => navigate('/ProjectList'), 2000); // Correct path
  };

  return (
    <>
      <Navbar />
      <div className="project-post-form fade-in">
        <h2>Post a Project</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label><FiFileText /> Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label><FiTag /> Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label><FiDollarSign /> Budget</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
          <div>
            <label><FiTool /> Skills Required</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>
          <div>
            <label><FiEdit /> Project Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" class="sub">Post Project</button>
        </form>
        <ToastContainer position="top-right" autoClose={1500} />
      </div>
    </>
  );
};

export default ProjectPostForm;
