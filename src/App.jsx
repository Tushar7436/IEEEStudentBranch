import React from "react";
import { Landing } from "./pages/Landing";
import { Header } from "./components/Navbar";
import { Reel } from "./components/About";
import { Event1 } from "./pages/Event";
import { HorizontalGallery } from "./pages/Gallery";
import { OurTeam } from "./pages/OurTeam";
import { RevealFooter } from "./pages/Foooter";
import "./App.css";

export const App = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};
