import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div>
      <div className="card mx-auto flex justify-center lg:w-96 m-5 glass p-5">
        <div className="flex gap-5 items-center">
          <img className="w-1/6" src={skill?.image} alt=""></img>
          <h2 className="text-2xl">{skill?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
