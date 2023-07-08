import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaBriefcase, FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Projects = () => {
  // const projectsData = useLoaderData();
  // console.log(projectsData);

  const [projectData, setProjectData] = useState([]);
  // console.log(projectData);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className=" py-6">
        <h2 className="text-4xl  text-center text-green-900 font-bold mb-10">
          <FaBriefcase className="inline-block mr-2 mb-1" /> Some Of My Recent
          Work...
        </h2>
      </div>

      <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
      <div className="text-center  my-10">
        <Link to="/projects">
          {" "}
          <button className=" text-black inline-block text-center bg-green-400 font-serif  focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:focus:ring-green-900">
            See All Projects
            <FaArrowAltCircleRight className="inline-block ml-2 mb-1 text-4xl text-green-600" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
