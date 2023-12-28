import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.png"
import vectorimg from "../../assets/Vector.png"

function Portfolio() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);

  return (
    <div className="lg:mx-12 mx-4 my-32 " id="portfolio">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center ">
        <div className="text-headingColor">
          <p className="text-xl font-semibold mb-5">Recent Projects</p>
          <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/Shailesh1Shrestha?tab=repositories">
            {" "}
            <button className="btn-primary bg-slate-950 py-5">
              <FaGithub className="w-7 h-8 inline-block " />
              Visit My Github
            </button>{" "}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* {projects.map((project) => ( */}
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project1}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
              Background Changer
            </h3>
            <p className="text-body text-lg mb-4">
              This project is about to change the background color of the page
              by clicking the color button. It is made by using Tailwind and
              React JS.
            </p>
            <a
              href="https://github.com/Shailesh1Shrestha/Background-Changer"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              />
            </a>
          </div>
        </div>
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project2}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
            Maya Your AI Friend
            </h3>
            <p className="text-body text-lg mb-4">
            This is a project that work like alexa and do some task that is provided by the user. It is made by using Python.
            </p>
            <a
              href="https://github.com/Shailesh1Shrestha/Maya-your-AI-Friend"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              />
            </a>
          </div>
        </div>
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project3}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
            Password Generator
            </h3>
            <p className="text-body text-lg mb-4">
            This project is about to generate a password by clicking the generate button which includes numberic and characters also. It is made by using Tailwind and React JS.
            </p>
            <a
              href="https://github.com/Shailesh1Shrestha/PasswordGenerator"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
