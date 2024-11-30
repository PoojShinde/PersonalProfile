import React from "react";
import about from "../assets/about.png";
import "remixicon/fonts/remixicon.css";

// Reusable Component for Role Item
const RoleItem = ({ title, description }) => (
  <div id="About" className="flex gap-3 py-4">
    <i className="ri-arrow-right-s-line mt-1" style={{ fontSize: "30px" }}></i>
    <span className="w-full md:w-96">
      <h1 className="text-xl md:text-2xl font-semibold leading-normal">
        {title}
      </h1>
      <p className="text-sm md:text-md leading-tight">{description}</p>
    </span>
  </div>
);

const About = () => {
  // Role Items Data
  const roles = [
    {
      title: "Frontend Developer",
      description: "I am a skilled frontend developer with a passion.",
    },
    {
      title: "Backend Developer",
      description: "I am a skilled backend developer with expertise in APIs.",
    },
    {
      title: "UI Fullstack Developer",
      description: "I am a skilled full-stack developer focused on UI/UX.",
    },
  ];

  return (
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black 
    shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-white">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          {/* Image Section */}
          <img
            className="md:h-80 object-contain"
            src={about}
            alt="About section illustration"
          />

          {/* Roles List */}
          <ul>
            {roles.map((role, index) => (
              <RoleItem
                key={index}
                title={role.title}
                description={role.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
