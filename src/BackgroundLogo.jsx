import React from 'react';
import './App.css';
import SYSTM from "./images/SYSTM-logo-logo.png";

const BackgroundLogo = () => {
  return (
    <div className="background-logo-container">
      <img 
        src={SYSTM}
        alt="SYSTM Logo" 
        className="background-logo-image"
      />
    </div>
  );
};

export default BackgroundLogo;
