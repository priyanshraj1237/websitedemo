import React, { useEffect, useState } from "react";
import DPUploader from "./DPUploader"; // Import DPUploader
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    skills: "",
    gender: "",
    age: "",
    language: "",
    profilePic: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
    setProfileData({
      ...storedData,
      skills: Array.isArray(storedData.skills) ? storedData.skills.join(", ") : "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Profile Picture Update
  const handleImageUpload = (image) => {
    setProfileData((prevData) => ({ ...prevData, profilePic: image }));
    localStorage.setItem("profilePic", image); // Store image in localStorage
  };

  const handleSave = () => {
    const updatedData = { ...profileData, skills: profileData.skills.split(",").map(skill => skill.trim()) };
    localStorage.setItem("profileData", JSON.stringify(updatedData));
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <div className="card p-3">

        {/* Display or Update Profile Picture */}
        <DPUploader onUpload={handleImageUpload} profilePic={profileData.profilePic} />

        {isEditing ? (
          <>
            <input type="text" name="name" value={profileData.name} onChange={handleChange} />
            <input type="email" name="email" value={profileData.email} onChange={handleChange} />
            <input type="text" name="phone" value={profileData.phone} onChange={handleChange} />
            <input type="number" name="age" value={profileData.age} onChange={handleChange} />
            <input type="text" name="gender" value={profileData.gender} onChange={handleChange} />
            <input type="text" name="language" value={profileData.language} onChange={handleChange} />
            <input type="text" name="country" value={profileData.country} onChange={handleChange} />
            <input type="text" name="experience" value={profileData.experience} onChange={handleChange} />
            <input type="text" name="skills" value={profileData.skills} onChange={handleChange} />
            <button className="btn btn-success mt-2" onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Age:</strong> {profileData.age}</p>
            <p><strong>Gender:</strong> {profileData.gender}</p>
            <p><strong>Language:</strong> {profileData.language}</p>
            <p><strong>Country:</strong> {profileData.country}</p>
            <p><strong>Experience:</strong> {profileData.experience}</p>
            <p><strong>Skills:</strong> {profileData.skills}</p>
            <button className="btn btn-primary mt-2" onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
