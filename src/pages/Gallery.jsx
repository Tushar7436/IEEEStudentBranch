import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import "../Assets/styles/Gallery.css";

import img1 from "../Assets/images/Gallery/img1.png";
import img2 from "../Assets/images/Gallery/img2.png";
import img3 from "../Assets/images/Gallery/img3.png";
import img4 from "../Assets/images/Gallery/img4.png";
import img5 from "../Assets/images/Gallery/img5.png";
import img6 from "../Assets/images/Gallery/img6.png";
import img7 from "../Assets/images/Gallery/img7.png";
import img8 from "../Assets/images/Gallery/img8.png";

gsap.registerPlugin(ScrollTrigger);

const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8];

const Header = () => (
  <header className="demo-wrapper__header demo-wrapper__flex demo-wrapper__align-items-center demo-wrapper__justify-content-center">
    <div>
      <h1 className="demo-wrapper__heading1">Gallery</h1>
    </div>
  </header>
);

const DemoText = () => (
  <section className="demo-wrapper__text">
    <div className="demo-wrapper__wrapper demo-wrapper__text">
      Maximizing_Our_Impact
    </div>
  </section>
);

const DemoGallery = ({ id }) => {
  const images = imagesArray.map((src, i) => (
    <li className="demo-wrapper__list-item" key={i}>
      <img className="demo-wrapper__image" src={src} alt={`Local ${i}`} />
    </li>
  ));

  return (
    <section className="demo-wrapper__gallery">
      <ul className="demo-wrapper__list demo-wrapper__wrapper">{images}</ul>
    </section>
  );
};
export const HorizontalGallery = () => {
  useEffect(() => {
    const images = gsap.utils.toArray("img");

    const showDemo = () => {
      gsap.utils.toArray("section").forEach((section, index) => {
        const wrapper = section.querySelector(".demo-wrapper__wrapper");
        const [x, xEnd] =
          index % 2
            ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
            : [wrapper.scrollWidth * -1, 0];
        gsap.fromTo(
          wrapper,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    };

    imagesLoaded(images).on("always", showDemo);

    const lazyLoad = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("demo-wrapper__image--visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(lazyLoad, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <div className="Ng">
      <div className="demo-wrapper">
        <Header />
        <DemoText />
        {[...Array(4).keys()].map((i) => (
          <DemoGallery key={i} id={i} />
        ))}
        <DemoText />
      </div>
    </div>
  );
};
