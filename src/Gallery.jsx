import React from 'react';
import "./style.css";
import Footer from './Footer';

function Gallery() {
  return (
    <div className="gallery-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/x7yUjOFCPzg?si=sSDrtLpDhlsQKXB_"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="gallery-video"
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default Gallery;