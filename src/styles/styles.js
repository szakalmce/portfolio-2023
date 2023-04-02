import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid red;
  width: 60%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
`;

/* PROJECTS */

export const ProjectsWrapper = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: 15% 80%;
  gap: 5%;
`;

export const ProjectsListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid yellow;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProjectListItem = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.25rem 0;

  &.active {
    color: red;
  }
`;

export const ProjectsItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const SingleProjectsWrapper = styled.div`
  border: 1px solid violet;
`;

/* NAVBAR */

export const NavbarWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  span {
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const SocialLinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
`;
export const SocialLinkItem = styled.li`
  cursor: pointer;
`;

export const SocialLink = styled.a`
  margin: 0;
  padding: 0;
  display: block;
  line-height: 0;
`;
