import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import useTitleHook from '../../../Hooks/useTitleHook';
import bg from '../../../images/bg.png';

const ProjectDetails = () => {
    const project = useLoaderData();
    useTitleHook("Project Details")
    const description = project?.description;
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            width: '100vw',
            padding:'20px'
          }} className="w-11/12 mt-16 mx-auto">
      <div>
        <PhotoProvider>
          <PhotoView src={project?.img}>
            <img
              className="m-0 mx-auto lg:w-3/4 rounded-xl"
              src={project?.img}
              alt="Car"
            />
          </PhotoView>
        </PhotoProvider>

        <h2 className=" mt-4 text-center">
          <span className="font-semibold text-2xl">{project?.name}</span>
        </h2>
          <p className="my-2">{
            description?.map(point => <li key={project?._id}>{point}</li>)
          }</p>
      </div>
      <div className='flex mt-5 justify-center gap-5'>
      <a target="_blank" rel='noreferrer' className='btn glass' href={`${project?.clientGithub}`}>Client Side Github Repository</a>
      <a target="_blank" rel='noreferrer' className='btn glass' href={`${project?.liveSite}`}>Live Site</a>
      <a target="_blank" rel='noreferrer' className='btn glass' href={`${project?.serverGithub}`}>Server Side Github Repository</a>
      </div>
    </div>
    );
};

export default ProjectDetails;