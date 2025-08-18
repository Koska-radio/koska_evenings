import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayButton from "./PlayButton";
import { NavLink } from 'react-router-dom';
import Home from "./Home"
import BackgroundLogo from "./BackgroundLogo";
import Gallery from "./Gallery"
import Archive from "./Archive"
import catface from "./images/koska.webp";
import KoskaRadioMarquee from "./KoskaRadioMarquee";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <BackgroundLogo />
        <header className="navbar">
          <img src={catface} alt="Koska Logo" className="koska-logo" />
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/Gallery" className={({ isActive }) => isActive ? 'active' : ''}>
              Gallery
            </NavLink>
            <NavLink to="/Archive" className={({ isActive }) => isActive ? 'active' : ''}>
              Archive
            </NavLink>
          </nav>
          <PlayButton />
          <KoskaRadioMarquee />
          {/* <img src={catface} alt="Koska Logo" className="koska-logo" /> */}
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Archive" element={<Archive />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;