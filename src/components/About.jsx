import "../Assets/styles/About.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Bgvideo from "../Assets/images/IEEE.mp4";

export const Reel = () => {
  return (
    <div className="flex-container">
      <div className="flex-item about">
        <h2>About Us</h2>
        <p>
          Welcome to the IEEE VIT Bhopal Student Chapter! As the world’s largest
          technical professional organization, IEEE is dedicated to advancing
          technology for humanity. Our mission is to foster technological
          innovation and excellence for the benefit of society. Through our
          highly-cited publications, conferences, technology standards, and
          educational activities, IEEE provides a platform for the global
          technical community to collaborate and innovate.
        </p>
      </div>
      {/* <div className="flex-item square">
        <video src={Bgvideo} autoPlay loop muted className="bg-video1" />
      </div> */}
      <ParallaxProvider>
        <div className="flex-item other">
          {/* <Ball1/>
          <Ball2 />
          <Ball3 /> */}
        </div>
      </ParallaxProvider>
    </div>
  );
};
