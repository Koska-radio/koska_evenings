import React from 'react';
import './ArtistInfo.css';

function ArtistInfo() {
return (
    <div className="artist-info-container">
        <div className="artist-info-content">
            <div className="artist-section">
                <h2>Koska Radio presents SYSTM collective</h2>
                <p className="artist-description">
                    What is systm? systm is within and between things. Things in the air or that 
                    you can hold in your hand or behind your screen or in your headphones or just 
                    in your head or that you said to your friend, in a state, last weekend. Which 
                    they wrote down, to confront you with later.
                </p>
                <p className="artist-description">
                    I'd like to hold your hand. So we can slow dance even though I'd stumble because 
                    I'm such a terrible dancer. But you've always been so good and I'm better when 
                    I'm with you. Better together. In the friend zone.
                </p>
                <p className="artist-description">
                    systm is an art and research community project at the juncture of music and media.
                </p>
                <p className="artist-description">
                    <strong>Find them at:</strong>
                </p>
                <div className="artist-links">
                    <a 
                        href="https://on.soundcloud.com/21sEcgWu5Jd5hxmqVB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        soundcloud
                    </a>
                    <a 
                        href="https://www.instagram.com/systm.world/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        instagram
                    </a>
                    <a 
                        href="https://kioskradio.com/show/bop-fantasies" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        kiosk radio show
                    </a>
                </div>
            </div>
        </div>
    </div>
);
}

export default ArtistInfo;
