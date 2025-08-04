import React from "react";
import "./NeonLineUnderPhoto.css";

const NeonLineUnderPhoto: React.FC = () => {
  return (
    <div className="photo-with-line">
      {/* Foto profil */}
      <img
        src="/src/assets/Untitled (36).png"
        alt="Profile"
        className="profile-photo"
      />

      {/* Garis vertikal glowing */}
      <div className="neon-line" />
      <div className="neon-dot" />
    </div>
  );
};

export default NeonLineUnderPhoto;
