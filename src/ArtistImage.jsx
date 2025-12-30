import React, { useState, useEffect } from 'react';
import bgPic from './images/schedule_background.png';
import './ArtistImage.css';

const ArtistImage = () => {
    const [streamData, setStreamData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.evenings.co/v1/streams/koska-radio/public/');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setStreamData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 15000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="loading">Loading stream cover...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    const isOffline = streamData.online === false;
    const displayImage = isOffline ? bgPic : streamData.image;

    return (
        <div className="artist-image-container">
            <a 
                href="https://evenings.fm/koska-radio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="artist-image-content"
            >
                <img 
                    src={displayImage} 
                    alt={isOffline ? "Koska Radio Offline" : "Now Playing"} 
                    className={isOffline ? "offline-image" : "online-image"}
                    loading="lazy"
                />
                <div className="play-overlay">
                    <div className="play-icon">▶</div>
                    <span className="play-text">Listen on Evenings</span>
                </div>
            </a>
        </div>
    );
};

export default ArtistImage;