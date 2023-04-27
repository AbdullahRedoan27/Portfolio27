import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import resume from "../../images/Abdullah Redoan's Resume.png";
import 'react-photo-view/dist/react-photo-view.css';
import bg from "../../images/bg.png";

const Resume = () => {
  const download = () => {
    fetch("Abdullah Redoan's resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Redoan's Resume.pdf";
        alink.click();
      });
    });
  };

  return <div
  style={{
    backgroundImage: `url(${bg})`,
    height: "100vh"
  }} className="mt-16">
    <PhotoProvider>
      <PhotoView src={resume}>
      <img className="w-96 mx-auto rounded-xl" src={resume} alt=""></img>
      </PhotoView>
    </PhotoProvider>
    <button className="btn glass flex justify-center w-48 mx-auto mt-5" onClick={download}>Download resume</button>

  </div>;
};

export default Resume;
