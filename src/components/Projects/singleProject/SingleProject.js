import React from 'react';
import { SingleProjectsWrapper } from '../../../styles/styles';

const SingleProject = ({ name, tech }) => {
  return (
    <SingleProjectsWrapper>
      <img src="#" alt="" />
      <h4>{name}</h4>
      <div>
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </SingleProjectsWrapper>
  );
};

export default SingleProject;
