import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Default icon

const ProfileIcon = ({ size = 40 }) => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <div style={{ width: size, height: size }}>
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <FaUserCircle size={size} color="#888" />
      )}
    </div>
  );
};

export default ProfileIcon;