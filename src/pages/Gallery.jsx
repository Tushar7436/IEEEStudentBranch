import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import "../Assets/styles/Gallery.css";
import { Image, CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "../cloudinaryConfig"; // Ensure casing is consistent

gsap.registerPlugin(ScrollTrigger);

const imagesPublicIds = [
  'img8_ux5pun',
  'img5_wtxoxs',
  'img3_sqswmm',
  'img7_o2gvjt',
  'img1_wimc9a',
  'img6_kxs2n9',
  'img4_gdwmrk',
  'img2_fiftkl'
];

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
  const images = imagesPublicIds.map((publicId, i) => (
    <li className="demo-wrapper__list-item" key={i}>
      <Image className="demo-wrapper__image" cloudName={cloudinaryConfig.cloudName} publicId={publicId} alt={`Cloudinary ${i}`} />
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
    <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
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
    </CloudinaryContext>
  );
};
