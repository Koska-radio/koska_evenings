import React from 'react';

function ArtistInfo() {
return (
    <div className="artist-info-container">
        <div className="artist-info-content">
            <div className="artist-section">
                <h2>Koska Radio presents SYSTM collective</h2>
                fill this with systms one description
                <p className="artist-description">
                Find them at: 
                </p>
                <div className="artist-links">
                    <a 
                        href="https://on.soundcloud.com/21sEcgWu5Jd5hxmqVB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Soundcloud
                    </a>
                    <a 
                        href="https://www.instagram.com/systm.world/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    </div>
);
}

export default ArtistInfo;
