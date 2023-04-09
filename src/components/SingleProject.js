import React from 'react';
import {
  SingleProjectsWrapper,
  SingleProjectsWrapperTop,
  ProjectImgWrapper,
  ProjectHoverWrapper,
  Img,
  Button,
} from '../styles/styles';

const SingleProject = ({ name, tech }) => {
  return (
    <SingleProjectsWrapper>
      <SingleProjectsWrapperTop>
        <ProjectImgWrapper>
          <Img src="https://dummyimage.com/600x400/000/fff" alt="" />
          <ProjectHoverWrapper>
            <Button project>Starter Files</Button>
            <Button project>Live Site</Button>
            <Button project>Source Code</Button>
          </ProjectHoverWrapper>
        </ProjectImgWrapper>

        <h4>{name}</h4>
        <div>
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </SingleProjectsWrapperTop>
    </SingleProjectsWrapper>
  );
};

export default SingleProject;
