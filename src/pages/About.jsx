import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { skills, experiences, extracurriculars } from "../constants";
import CTA from "../components/CTA";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Heyy! I'm
        <span className="text-emerald-600 font-semibold"> Sofia </span>
        (she/her)👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          My name is Sofia Pham (she/her), and I'm a Computer Science student at
          TMU. I discovered my passion for coding and have never looked back
          since then! I’m particularly interested in software development, with
          a focus on web and game development.
        </p>
        <h2>🌈 Goals for 2025</h2>
        <ul>
          <li>
            - Master data structures and algorithms to ace technical interviews.
          </li>
          <li>
            - Build and deploy my personal website with interactive 3D assets by
            the end of the semester.
          </li>
          <li>
            - Develop and deploy a full-stack web application/game to enhance my
            portfolio.
          </li>
        </ul>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Professional Experiences</h3>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                  boxShadow: "none",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </h3>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="py-16 flex flex-col">
        <h3 className="subhead-text">Extracurricular Activities</h3>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {extracurriculars.map((extracurricular, index) => (
              <VerticalTimelineElement
                key={extracurricular.index}
                date={extracurricular.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={extracurricular.icon}
                      alt={extracurricular.index}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: extracurricular.iconBg,
                  boxShadow: "none",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: extracurricular.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {extracurricular.title}
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {extracurricular.company_name}
                    </p>
                  </h3>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {extracurricular.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`extracurricular-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-800 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all text-md"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default About;
