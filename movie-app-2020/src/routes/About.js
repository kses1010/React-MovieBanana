import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “나는 아직도 배고프다”
      </span>
      <span>− 거스 히딩크, 2002</span>
    </div>
  );
}

export default About;