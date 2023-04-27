import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import bg from "../../images/bg.png";
import useTitleHook from "../../Hooks/useTitleHook";
import { SpinContext } from "../../Contexts/SpinProvider";
import Loading from "../Loading/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const {isLoading, setIsLoading} = useContext(SpinContext);
  useTitleHook("Projects")

  useEffect(() => {
    setIsLoading(true);
    fetch("https://portfolio-server-three-psi.vercel.app/projects")
      .then((res) => res.json()
      )
      .then((data) => {
        setProjects(data);
        setIsLoading(false)
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {
        isLoading ?
        <Loading></Loading>
        :
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {projects?.map((project) => (
          <ProjectCard key={project?._id} project={project}></ProjectCard>
        ))}
      </div>
      }
    </div>
  );
};

export default Projects;
