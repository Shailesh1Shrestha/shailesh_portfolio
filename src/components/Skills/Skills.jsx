import React from "react";
import skill1 from './img1.png';
import skill2 from './img2.png';

const skills = [
  {
    id: 1,
    name: "Frontend Development",
    description1: "HTML and CSS",
    photo: {skill1},
    description2: "JavaScript and React ",
    description3: "Tailwind and Bootstrap",
  },
  {
    id: 2,
    name: "Backend Development",
    description1: "Java",
    photo: {skill2},
    description2: "MySQL",
    description3: "Php",
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-28" id="skills">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Expertise</h2>
      </div>

      <div className="grid lg:gri-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        {skills.map((skill) => (
          <div
          key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer
                    hover:-translate-y-4 translition-all duration-300 skillcard"
          >
            {/* <img
              src={skill.photo}
              alt="img"
              className="w-20 h-20 bg-white rounded-lg shadow-md mb-7 p-3"
            /> */}
            <h3 className=" text-3xl font-bold mb-4">{skill.name}</h3>
            <h2 className="text-xl">{skill.description1} </h2>
            <h2 className="text-xl">{skill.description2} </h2>
            <h2 className="text-xl">{skill.description3} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
