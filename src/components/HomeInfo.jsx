import React from "react";
import { Link } from "react-router-dom";

// component to reuse code for diff stages
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="relative sm:text-xl sm:leading-snug text-center bg-green-600 rounded-xl py-5 px-8 text-white mx-5 items-center flex flex-col">
      <p className="text-center mb-6">{text}</p>
      <Link
        to={link}
        className="absolute bottom-[-15px] bg-white text-green-600 font-semibold px-6 py-3 rounded-lg text-center hover:bg-green-800 hover:text-white shadow-md hover:shadow-lg"
      >
        {btnText}
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center bg-green-600 rounded-xl py-4 px-8 text-white mx-5">
      Heyy! My name is <span className="font-semibold">Sofia</span> 👋
      <br />
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm a CS student at TMU, interested in Software Development!"
      link="/about"
      btnText="Learn more about me!"
    />
  ),
  3: (
    <InfoBox
      text="I've worked on projects through work, school, and personal interests!"
      link="/projects"
      btnText="Learn more about my projects!"
    />
  ),
  4: <InfoBox text="Ways to contact me" link="/contact" btnText="Here!" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
