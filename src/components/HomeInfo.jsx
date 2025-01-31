import React from "react";
import { Link } from "react-router-dom";

// component to reuse code for diff stages
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        {/* <img src={arrow} className="w-4 h-4 object-contain" /> */}
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Heyy! <span className="font-semibold">Sofia</span> here 👋
      <br />
      <p>I'm interested in Software Development! 🚀</p>
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm a computer science student at TMU! 📚 "
      link="/about"
      btnText="Learn More About Me"
    />
  ),
  3: (
    <InfoBox
      text="I've worked on projects through work, school, and personal interests!"
      link="/projects"
      btnText="Learn More About My Projects"
    />
  ),
  4: <InfoBox text="Ways to contact me" link="/contact" btnText="Here!" />,
};

const HomeInfo = ({ currentStage }) => {
  //   console.log("current stage: ", currentStage);
  return renderContent[currentStage] || null;
};

export default HomeInfo;
