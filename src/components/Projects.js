import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ProjectListItem,
  ProjectsItemsWrapper,
  ProjectsListWrapper,
  ProjectsWrapper,
  ProjectsInner,
} from '../styles/styles';
import { projects, techList } from './data';
import SingleProject from './SingleProject';
import Title from './utils/Title';
import { firstToUpper } from './utils/fn';

const Projects = ({ myRef }) => {
  const [currentElement, setCurrentElement] = useState('latest');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCurrentElement = (id) => {
    setCurrentElement(id);

    const filtered = projects.filter((project) => {
      console.log(id);
      if (id === 'latest') {
        return project;
      } else {
        return project.tech.includes(id);
      }
    });

    setFilteredProjects(filtered);
  };

  return (
    <ProjectsWrapper ref={myRef}>
      <Title>Projects</Title>
      <ProjectsInner>
        <ProjectsListWrapper>
          <ProjectListItem
            className={`${currentElement === 'latest' ? 'active' : ''}`}
            onClick={() => handleCurrentElement('latest')}
          >
            Latest
          </ProjectListItem>
          {techList.map((item, index) => {
            const { id, name } = item;
            console.log(name);
            return (
              <ProjectListItem
                key={id}
                className={`${currentElement === name ? 'active' : ''}`}
                onClick={() => handleCurrentElement(name)}
              >
                {firstToUpper(name)}
              </ProjectListItem>
            );
          })}
        </ProjectsListWrapper>

        <ProjectsItemsWrapper>
          {filteredProjects.map((project) => (
            <SingleProject {...project} key={project.id} />
          ))}
        </ProjectsItemsWrapper>
      </ProjectsInner>
    </ProjectsWrapper>
  );
};

export default Projects;
