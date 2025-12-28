import "./Archive.css";
import React, { useEffect, useState } from 'react';
import { getAllTracks } from './getAllTracks';
import Footer from './Footer';

function Archive() {
  // Add state to store tracks
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use useEffect to fetch data when component mounts
  useEffect(() => {
    setLoading(true);
    getAllTracks()
      .then(fetchedTracks => {
        setTracks(fetchedTracks);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching tracks:", err);
        setError("Failed to load tracks");
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="archive-container">
        {/* Display loading, error, or tracks */}
        {loading ? (
          <p>Loading tracks...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
              <div className="tracks-grid">
                {tracks.map(track => (
                  <div key={track.id} className="track-item">
                    <div className="track-image-container">
                      <img 
                        src={track.cover} 
                        alt={track.title}
                        loading="lazy"
                      />
                      <div className="track-overlay">
                        <a href={track.weblink} target="_blank" rel="noopener noreferrer" className="play-overlay">
                          ▶
                        </a>
                      </div>
                    </div>
                    <div className="track-info">
                      <h3>{track.title}</h3>
                      <p className="track-details">
                        <span>{track.duration}</span>
                        <span>{track.listens} plays</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
      </div>
      <Footer />
    </div>
  );
}

export default Archive;