import "../Assets/styles/Event.css";
import one from "../Assets/images/one.png";
import two from "../Assets/images/two.png";
import three from "../Assets/images/three.png";

export const Event1 = () => {
  return (
    <div className="Event">
      <div className="heading">
        <div className="head">
          <h1>Events</h1>
        </div>
        <div className="subHead">
          <h2>Join Us in upcooming Exciting Events</h2>
        </div>
      </div>
      <div id="grid">
        <div className="left top">
          <img src={one} alt="one" />
        </div>
        <div className="center middle">
          <img src={two} alt="two" />
        </div>
        <div className="right bottom">
          <img src={three} alt="three" />
         </div>
      </div>
    </div>
  );
};
