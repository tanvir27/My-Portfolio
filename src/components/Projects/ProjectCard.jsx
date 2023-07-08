import React from "react";

const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    img,
    liveLink,
    clientSide,
    serverSide,
    technologies,
    category,
  } = project;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name} <span>{category}</span>
        </h2>
        <p>{description}</p>
        <p className="font-semibold">Technologies: {technologies}</p>
        <div className="card-actions justify-end">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-black bg-green-400 hover:bg-green-500 hover:font-semibold focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-green-900 transition-all transform hover:scale-125"
            >
              Live Link
            </button>
          </a>
          <a href={clientSide} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-black bg-green-400 hover:bg-green-500 hover:font-semibold focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-green-900 transition-all transform hover:scale-125"
            >
              Git Client
            </button>
          </a>
          <a href={serverSide} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-black bg-green-400 hover:bg-green-500 hover:font-semibold focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-green-900 transition-all transform hover:scale-125"
            >
              Git Server
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
