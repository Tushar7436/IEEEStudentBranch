import React, { useState, useEffect } from "react";
import { Landing } from "./pages/Landing";
import { Header } from "./components/Navbar";
import { Reel } from "./components/About";
import { Event1 } from "./pages/Event";
import { HorizontalGallery } from "./pages/Gallery";
import { OurTeam } from "./pages/OurTeam";
import { RevealFooter } from "./pages/Foooter";
import { PreLoader } from "./components/preloader.jsx";
import "./App.css";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Header />
          <div id="landing">
            <Landing />
          </div>
          <div id="about">
            <Reel />
          </div>
          <div id="event">
            <Event1 />
          </div>
          <div id="gallery">
            <HorizontalGallery />
          </div>
          <div id="team">
            <OurTeam />
          </div>
          <div id="footer">
            <RevealFooter />
          </div>
        </>
      )}
    </div>
  );
};
