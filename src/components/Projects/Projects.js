import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        nodes {
          content
        }
      }
    }
  `);

  const posts = data.allWpPost.nodes;

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.content}</p>
      ))}
    </div>
  );
};

export default Projects;
