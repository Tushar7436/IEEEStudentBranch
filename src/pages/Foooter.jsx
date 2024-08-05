import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../Assets/styles/revealfooter.css";
import { SocialLinks } from "../components/Social.jsx";
import { Reveal } from '../components/Wave.jsx';
gsap.registerPlugin(ScrollTrigger);

export const RevealFooter = () => {
    const footerRef = useRef(null);
    const revealRef = useRef(null);
    const brainRef = useRef(null);

    useEffect(() => {
        const revealElement = revealRef.current;
        const footerElement = footerRef.current;

        gsap.to(revealElement, {
            scrollTrigger: {
                trigger: footerElement,
                start: 'top end', 
                end: 'bottom center',  
                scrub: true,
                toggleActions: 'play reverse play reverse',
                onEnter: () => gsap.to(revealElement, { position: 'fixed', bottom: 0, display: 'flex', opacity: 1 }),
                onLeaveBack: () => gsap.to(revealElement, { position: 'absolute', bottom: 0, display: 'none', opacity: 0 }),
            }
        });

    }, []);

    return (
        <div>
        <div className="reveal__footer" ref={footerRef}>
            <div className="reveal__header">
                <SocialLinks />
            </div>
            <div className="brain" ref={brainRef}></div>
            <div className="reveal__okay" ref={revealRef}>
                <Reveal />
                
            </div>
        </div>
        </div>
    );
};
