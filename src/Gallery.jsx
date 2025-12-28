import React from 'react';
import "./Gallery.css";
import ScheduleItem from './ScheduleItem';
import scheduleData from './scheduleData';

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
            {scheduleData.map((item) => (
              <ScheduleItem
                key={item.id}
                time={item.time}
                title={item.title}
                artist={item.artist}
                description={item.description}
                genres={item.genres}
                links={item.links}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;