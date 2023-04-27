import React from "react";
import MouseAttract from "../../Particles/MouseAttract";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from '../../../images/night-green (Small).png';

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
        className="relative z-20 lg:top-52 lg:left-20 top-40 text-center lg:text-left"
      >
        <h3 className="text-2xl text-white ml-2">I am</h3>
        <h3 className="lg:text-5xl text-4xl font-bold text-primary">Abdullah Redoan</h3>
        <h3 className="lg:text-lg text-white font-semibold ">Front-end Developer</h3>
        <h3 className="text-white mt-3 text-sm lg:text-lg text-justify m-8 lg:mx-2">I am a MERN Stack front end Developer with a six months hands on experience. I have learned HTML5, CSS3, JavaScript, React.js, TailwindCSS, Bootstrap, DaisyUi,  Express Js, Node js and MongoDb in the last six months and created some amazing projects. And being a quick learner, I always try to be updated with new technologies.</h3>
        <motion.div
        className="box w-48"
        whileHover={{ scale: 1.1, x:10 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
        <Link to="/resume" className="btn glass border-b-cyan-200 border-b-2">Get My Resume</Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{ duration: 1 }} className="absolute top-96 lg:top-36 z-10 right-8">
        <img className="object-contain md:object-scale-down lg:w-11/12 lg:mt-0" src={image} alt=""></img>
      </motion.div>
      </div>
      <MouseAttract></MouseAttract>
    </div>
  );
};

export default Banner;
