import React from 'react';
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <iframe
          src="https://www.youtube-nocookie.com/embed/x7yUjOFCPzg?si=sSDrtLpDhlsQKXB_"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="gallery-video"
          title="YouTube video player"
        ></iframe>
        
        <div className="schedule-container">
          <ul className="schedule-list">
            <li><strong>12:00-12:43:</strong> Cultural Imperialism Mix w/ Emily Zorro</li>
            <li><strong>12:43-1:43:</strong> Ponder w/ Cröak</li>
            <li><strong>1:43-2:36:</strong> Ruta #88 w/ Dianoches</li>
            <li><strong>2:36-3:47:</strong> biking around my head w/ ant</li>
            <li><strong>3:47-4:46:</strong> sunsunsun w/ Magi Ludi</li>
            <li><strong>4:46-5:50:</strong> lossless w/ neorah</li>
            <li><strong>5:50-6:34:</strong> Altered Religion w/ jun33</li>
            <li><strong>6:34-7:34:</strong> Are u drunk? w/ Loronze Luego</li>
            <li><strong>7:34-8:35:</strong> MT1 w/ she_skin</li>
            <li><strong>8:35-9:35:</strong> Sounds of Late Night London w/ Ifeoluwa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;