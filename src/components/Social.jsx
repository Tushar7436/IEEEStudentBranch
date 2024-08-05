import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Assets/styles/SocialLinks.css'; 


import twitter from '../Assets/images/twitter.png';
import linkedin from '../Assets/images/linkedin.png';
import facebook from '../Assets/images/facebook.png';
import instagram from '../Assets/images/instagram.png';
import youtube from '../Assets/images/youtube.png';

gsap.registerPlugin(ScrollTrigger);

export const SocialLinks = () => {
  return (
    <div className="social-links-section">
      <h1>Follow Us</h1>
      <div className="social-links">
        <div className="social-link">
          <span>Twitter</span>
          <a href="https://x.com/IEEEorg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div className="social-link">
          <span>LinkedIn</span>
          <a href="https://www.linkedin.com/company/ieee-vit-bhopal/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className="social-link">
          <span>Instagram</span>
          <a href="https://www.instagram.com/ieee_vitb/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className="social-link">
        <span>Facebook</span>
          <a href="https://www.facebook.com/IEEEStudents/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
        <div className="social-link">
          <span>Youtube</span>
          <a href="https://www.youtube.com/@IEEEorg" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};
