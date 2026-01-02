import React, { useState } from 'react';

/**
 * ScheduleItem Component
 * 
 * Displays a single mix item with expandable description.
 * Click to toggle the description visibility.
 */
const ScheduleItem = ({ time, title, artist, description, genres, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent toggling when clicking links
  };

  const getLinkIcon = (type) => {
    switch (type) {
      case 'soundcloud': return '☁';
      case 'instagram': return '◎';
      case 'spotify': return '●';
      case 'website': return '◈';
      default: return '→';
    }
  };

  return (
    <li 
      className={`schedule-item ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="schedule-item-header">
        <strong>{time}</strong>
        <span className="schedule-item-title">{title} w/ {artist}</span>
      </div>
      
      <div className="schedule-item-content">
        {description && (
          <pre className="schedule-item-description">
            {description}
          </pre>
        )}
        
        {genres && (
          <div className="schedule-item-genres">
            {`// genres: ${genres}`}
          </div>
        )}
        
        {links && Object.keys(links).length > 0 && (
          <div className="schedule-item-links" onClick={handleLinkClick}>
            {Object.entries(links).map(([type, url]) => (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-box link-${type}`}
              >
                <span className="link-icon">{getLinkIcon(type)}</span>
                <span className="link-label">{type}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default ScheduleItem;
