import React, { useState } from 'react';

import '../styles/DPUploader.css';
import defaultProfileIcon from '../assets/profileicon.png'; // Adjust the path if needed

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
]

const DPUploader = () => {
  const [image, setImage] = useState(defaultProfileIcon);
  const [showOptions, setShowOptions] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setShowOptions(false);
      setShowAvatars(false);
    }
  };

  const handleAvatarSelect = (avatar) => {
    setImage(avatar);
    setShowAvatars(false);
  };

  return (
    <div className="profile-uploader">
      <div className="profile-card" onClick={() => setShowOptions(!showOptions)}>
        <img src={image} alt="Profile" className="profile-image" />
      </div>

      {showOptions && (
        <div className="options">
          <label className="upload-option">
            Upload from Computer
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <button 
            onClick={() => {
              setShowAvatars(!showAvatars);
              setShowOptions(false);
            }}
            className="avatar-button"
          >
            Choose Avatar
          </button>
        </div>
      )}

      {showAvatars && (
        <div className="avatars-grid">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt="Avatar"
              className="avatar-image"
              onClick={() => handleAvatarSelect(avatar)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DPUploader;


