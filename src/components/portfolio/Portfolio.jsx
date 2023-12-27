import React from "react";
import { useState, useEffect } from "react";
import { FiDribbble } from "react-icons/fi";


function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="lg:mx-12 mx-4 my-32 " id="portfolio">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center ">
      <div className="text-headingColor">
        <p className="text-xl font-semibold mb-5">Recent Projects</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
      </div>
      <div>
        <button className="btn-primary bg-dribble py-5"><FiDribbble className="w-6 h-6 inline-block mr-2"/> Visit My Dribble</button>
      </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="shadow-xl rounded-lg cursor-pointer">
            <img
              src={project.image}
              alt=""
              className="hover:scale-90 transition-all duration-300"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-2 text-headingColor">
                {project.name}
              </h3>
              <p className="text-body text-lg mb-4">{project.description}</p>
              <a href="/" className="text-xl underline underline-offset-8 hover:text-primary ">
                View In Dribble
                <img
                  src="src/assets/vector.png"
                  alt=""
                  className="w-4 inline-block ml-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
