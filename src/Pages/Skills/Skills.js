import React, { useContext, useEffect, useState } from "react";
import SkillCard from "./SkillCard/SkillCard";
import bg from "../../images/bg.png";
import Loading from "../Loading/Loading";
import { SpinContext } from "../../Contexts/SpinProvider";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const {isLoading, setIsLoading} = useContext(SpinContext);
  useEffect(() => {
    setIsLoading(true)
    fetch("https://portfolio-server-three-psi.vercel.app/skills")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setSkills(data);
      });
  }, []);
  return (
    <div>
      {
        isLoading ? 
        <Loading></Loading> 
        : 
        <div
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-16">
        {skills?.map((skill) => (
          <SkillCard key={skill?._id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
      }
    </div>
  );
};

export default Skills;
