import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className="card lg:w-96 mx-auto m-5 glass shadow-xl">
        <figure className="px-3 pt-3">
          <img
            src={project?.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-white items-center text-center">
          <h2 className="card-title">{project?.name}</h2>
          <h2 className="text-sm">{project?.type}</h2>
          <p></p>
          <div className="card-actions mx-auto flex flex-col items-center">
            <Link to={`/projectDetails/${project?._id}`} className="btn glass">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
