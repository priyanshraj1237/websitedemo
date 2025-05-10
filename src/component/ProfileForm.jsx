import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DPUploader from "./DPUploader"; // Import DPUploader component
import '../styles/ProfileForm.css'

const ProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    skills: [], // Ensure it's an array
    gender: "",
    age: "",
    language: "",
    profilePic: null,
  });

  const countries = ["India", "USA", "Canada", "Germany", "Australia"];
  const experienceOptions = ["Fresher", "0-1", "1-2", "2-5", "More than 5"];
  const genders = ["Male", "Female", "Other"];
  const languages = ["English", "Hindi", "Spanish", "French", "German"];

  // Handle Form Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Skills Input (convert comma-separated string to array)
  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value.split(",").map(skill => skill.trim()) });
  };

  // Handle Image Upload
  const handleImageUpload = (image) => {
    setFormData((prev) => ({ ...prev, profilePic: image }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(formData)); // Store data
    navigate("/profile"); // Redirect to Profile Page
  };

  return (
    <div className="container mt-4">
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit} className="border p-3">
        
        <DPUploader onUpload={handleImageUpload} />

        <input type="text" className="form-control mb-3" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
        
        
        <input type="email" className="form-control mb-3" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        
        <input type="tel" className="form-control mb-3" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
        
        <input type="number" className="form-control mb-3" placeholder="Age" name="age" value={formData.age} onChange={handleChange} required />
        
        <select className="form-select mb-3" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          {genders.map((gender, index) => (
            <option key={index} value={gender}>{gender}</option>
          ))}
        </select>

        <select className="form-select mb-3" name="language" value={formData.language} onChange={handleChange} required>
          <option value="">Select Language</option>
          {languages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>

        <select className="form-select mb-3" name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>

        <select className="form-select mb-3" name="experience" value={formData.experience} onChange={handleChange} required>
          <option value="">Select Experience</option>
          {experienceOptions.map((exp, index) => (
            <option key={index} value={exp}>{exp}</option>
          ))}
        </select>

        <input type="text" className="form-control mb-3" placeholder="Skills (comma-separated)" name="skills" value={formData.skills.join(", ")} onChange={handleSkillsChange} required />

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;