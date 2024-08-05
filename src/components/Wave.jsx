import React, { useEffect } from "react";
import "../Assets/styles/Wave.css";

export const Reveal = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    script1.type = "module";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    script2.setAttribute("nomodule", "");
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="Reveal">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <p className="brand">
        &copy; 2024 IEEE VIT Bhopal Student Chapter <br /> All Rights
        Reserved
      </p>
    </div>
  );
};
