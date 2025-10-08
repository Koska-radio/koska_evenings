import React, { useState, useEffect, useRef } from 'react';
import ArtistImage from './ArtistImage';
import Setlist from './Setlist';
import './MainLayout.css';

const MainLayout = () => {
    const [scrollY, setScrollY] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="main-layout-container">
            <div className="three-column-wrapper">
                {/* Component 1: ArtistImage */}
                <div className="column">
                    <ArtistImage />
                </div>

                {/* Component 2: Video */}
                <div className="column">
                    <div className="video-content-wrapper">
                        <div 
                            className="video-background"
                            style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
                        >
                            <video 
                                ref={videoRef}
                                className="portrait-video"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="/videos/DoomscrollShort.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Component 3: Setlist */}
                <div className="column">
                    <Setlist />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;