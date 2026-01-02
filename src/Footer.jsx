import React from "react";
import "./Footer.css";
import koskaCopy from "./images/koska copy.jpg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2>About Us</h2>
        <p>
          Koska Radio is an online radio platform broadcasting the less-heard from various undisclosed locations.<br />
          We serve as a digital space for showcasing music, visuals and everything in between.
        </p>
        <p>
          <strong>How to tune in?</strong>
        </p>
        <p>
          Tune in live during one of the broadcasts, or explore previous shows in our archives.<br />
          Our streams are made possible thanks to the work done by the people over at{" "}
          <a
            href="https://evenings.fm/"
            target="_blank"
            rel="noopener noreferrer"
            className="soundcloud-link"
          >
            <strong>evenings.fm</strong>
          </a>
          .<br />
          Make sure to check out the project and the other brilliant radios they host.<br />
          We will be regularly updating the page to feature all our back-catalogue.
        </p>
      </div>
      <div className="footer-right">
        <img 
          src={koskaCopy} 
          alt="Koska Artwork" 
          className="footer-image"
          loading="lazy"
        />
      </div>
    </footer>
  );
}

export default Footer;
