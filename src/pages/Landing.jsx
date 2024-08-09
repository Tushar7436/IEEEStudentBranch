import React from "react";
import DynamicText from "../components/DynamicText";
import "../Assets/styles/Landing.css";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

// Use your Cloudinary video URL here
const Bgvideo = "https://res.cloudinary.com/dxxmikdia/video/upload/v1722993537/video16_y6iskf.mp4";

export const Landing = () => {
  const Buttonfooter = () => (
    <Link to="/FTG" className="btn-footer">
      <div className="btn-footer__content">
        <span className="btn-footer__text">Show some magic!</span>
        <div className="btn-footer__shape-1"></div>
        <div className="btn-footer__shape-2"></div>
        <div className="btn-footer__shape-3"></div>
        <div className="btn-footer__shape-4"></div>
      </div>
      <div className="btn-footer__shadow"></div>
    </Link>
  );

  const Landbox = () => (
    <div>
      <h1>Welcome to IEEE </h1> 
      <h2>Student Branch <br />VIT Bhopal</h2>
      <span className="dynText">
        <DynamicText /> {/* Dynamic Text Area */}
      </span>
      <div className="btn-container">
        <div className="inner">
          <div className="shapeSM"></div>
          <div className="lrn-more box" onClick={() => scroller.scrollTo('Footer', { smooth: true, duration: 800 })}>
            Learn More
            <span className="arrow">
              <i className="fa-solid fa-arrow-right fa-xl arrow"></i>
            </span>
          </div>
        </div>
        <div className="inner">
          <div className="contact box" onClick={() => scroller.scrollTo('footer', { smooth: true, duration: 800 })}>
            Follow Us
            <span className="arrow">
              <i className="fa-solid fa-arrow-right fa-xl arrow"></i>
            </span>
          </div>
          <div className="shapeLG"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="landing">
      <video autoPlay muted id="bg-video" crossOrigin="anonymous">
        <source src={Bgvideo} type="video/mp4" />
      </video>
      <header className="land-header">
        <Landbox />
      </header>
      <footer className="land-footer" id="footer">
        <Buttonfooter />
      </footer>
    </div>
  );
};
