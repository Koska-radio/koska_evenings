import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Footer from "./Footer";
import ArtistInfo from "./ArtistInfo";
import ArtistImage from "./ArtistImage";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="video-content-wrapper">
        {/* Background Video */}
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
        <ArtistImage />
      </div>
      <ArtistInfo />
      <Footer />
    </div>
  );
}

export default Home;