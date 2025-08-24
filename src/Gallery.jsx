import React from 'react';
import "./style.css";
import Footer from './Footer';

function Gallery() {
  return (
    <div className="main-container">
      <div id="content">
        <div className="media-container">

          <div className="video-content-wrapper">
            <iframe
              src="https://www.youtube.com/embed/g4Y-YqvQODI?autoplay=1&mute=1&loop=1&playlist=g4Y-YqvQODI&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              className="background-video"
              title="Koska Gallery Stream"
            ></iframe>
          </div>


          <div className="overlay-content">
            <div className="scrolling-text">

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;