import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ProjectListItem,
  ProjectsItemsWrapper,
  ProjectsListWrapper,
  ProjectsWrapper,
  SingleProjectsWrapper,
} from '../../styles/styles';
import { projects } from '../data';
import SingleProject from './singleProject/SingleProject';

const Projects = () => {
  const [currentElement, setCurrentElement] = useState('latest');

  // filtorwanie i wracanie do porzedniego stanu

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
    <ProjectsWrapper>
      <ProjectsListWrapper>
        <ProjectListItem
          className={`${currentElement === 'latest' ? 'active' : ''}`}
          onClick={() => handleCurrentElement('latest')}
        >
          Latest
        </ProjectListItem>
        <ProjectListItem
          className={`${currentElement === 'node' ? 'active' : ''}`}
          onClick={() => handleCurrentElement('node')}
        >
          Node
        </ProjectListItem>
        <ProjectListItem
          className={`${currentElement === 'js' ? 'active' : ''}`}
          onClick={() => handleCurrentElement('js')}
        >
          JavaScript
        </ProjectListItem>
        <ProjectListItem
          className={`${currentElement === 'gatsby' ? 'active' : ''}`}
          onClick={() => handleCurrentElement('gatsby')}
        >
          Gatsby
        </ProjectListItem>
      </ProjectsListWrapper>

      <ProjectsItemsWrapper>
        {filteredProjects.map((project) => (
          <SingleProject {...project} key={project.id} />
        ))}
      </ProjectsItemsWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
