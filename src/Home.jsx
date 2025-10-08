import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Footer from "./Footer";
import ArtistInfo from "./ArtistInfo";
import ArtistImage from "./ArtistImage";
import Setlist from "./Setlist";
import MainLayout from "./MainLayout";

function Home() {
  return(
    <div>
      <MainLayout />
      <ArtistInfo />
      <Footer />
    </div>
  );
}

export default Home;