import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import footerlogo from "./images/DRAGON KOSKA (1).webp";

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
        <div className="video-background">
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

        {/* Scrolling Overlay Text */}
        {/* <div 
          className="overlay-artist-name"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1>EXAMPLE ARTIST NAME</h1>
        </div> */}
      </div>

      <footer>
        <div className="footer-left">
          <h2>About Us</h2>
          <p>
            An online community radio based in Maastricht, dedicated to
            streaming the less-heard, and the off-kilter. We hope to showcase
            (non-)local sounds, carefully curated by people's taste - boundless
            of genre. The studio serves as an open space for all people to enjoy
            music together. If you think you have something to bring: get in
            touch.
          </p>
          <p>
            <strong>How to listen to us?</strong>
          </p>
          <p>
            Tune in live, right here, or using the back-up link for non-chrome
            and mobile streaming (still working on it, sorry). Re-listen to any
            broadcast via Koska's{" "}
            <a
              href="https://on.soundcloud.com/LG9iX"
              target="_blank"
              rel="noopener noreferrer"
              className="soundcloud-link"
            >
              <strong>Soundcloud</strong>
            </a>
            . We will be regularly updating the page to feature all our
            back-catalogue.
          </p>
        </div>
        <div className="footer-right">
          <img src={footerlogo} alt="Footer Logo" />
          <p>
            All graphics designed by{" "}
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fanntonnio1-portfolio.my.canva.site%2Fportfolio-sufukante%3Ffbclid%3DPAAaaXq-WmlwB5-j28vjtSRtsxzZKrjY6steHDVfFeZb64V4AVpBM1oTD7WjQ_aem_AXD1wbiDZJqk_lNtNOMcgJpznntCPLl6CwOEc6ljSVoFSW96qXJLm_sU7dnf86XqpJ8&e=AT23AuvWwAnvvZl3CIoT12gDVtXSC-3jfKt7YW2e8G-yc0_jWitpXFMsgKQMs7B2EGAszjW2pedfx1hmw0ofwwNgHfbLNF8re4VdomeWHZ0_qhHbysQ_yNQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Antonio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;