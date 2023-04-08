import styled, { css } from 'styled-components';
import { devices } from './media';

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;

  @media ${devices.mobile} {
    width: 100%;
  }
`;

/* PROJECTS */

export const ProjectsWrapper = styled.div`
  margin-bottom: 5rem;

  @media ${devices.mobile} {
    margin-bottom: 3rem;
  }
`;

export const ProjectsInner = styled.div`
  display: grid;
  grid-template-columns: 15% 80%;
  gap: 2rem;
  min-height: 500px;

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ProjectsListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ProjectListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem 0;
  background-color: #eee;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border: none;
  }

  &.active {
    font-weight: bold;
    background-color: #ddd;
  }
`;

export const ProjectsItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-content: flex-start;
  min-height: 550px;

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const SingleProjectsWrapperBottom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;

  transition: all 0.25s ease-in-out;
`;

export const ProjectHoverWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const SingleProjectsWrapper = styled.div`
  border: 1px solid #eee;
  height: 250px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  cursor: pointer;

  @media ${devices.mobile} {
    height: 100%;
  }

  img {
    width: 100%;
  }

  span {
    margin-right: 0.5rem;
    padding: 0.2rem;
    background: #eee;
    font-size: 0.8rem;
  }

  &:hover ${ProjectHoverWrapper} {
    opacity: 1;
    visibility: visible;
    background-color: #fff;
    border: 1px solid #eee;
  }
`;

export const SingleProjectsWrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectImgWrapper = styled.div`
  position: relative;
`;
export const Img = styled.img`
  height: 100%;
  display: block;
`;

/* NAVBAR */

export const NavbarWrapper = styled.div`
  padding: 2rem 1rem;
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
  padding: 0.25rem;
  background-color: ${(props) => (props.footer ? '#ddd' : '#eee')};
`;

export const SocialLink = styled.a`
  margin: 0;
  padding: 0;
  display: block;
  line-height: 0;
  font-size: 1.2rem;
`;

/* HEADER */

export const HeaderWrapper = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin-bottom: 5rem;
  background-color: #eee;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media ${devices.mobile} {
    height: 90vh;
    border-radius: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
export const HeaderContent = styled.div`
  grid-area: 1 / 1 / 4 / 6;
  display: grid;
  gap: 3rem;
`;
export const HeaderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
`;
export const Paragraph = styled.p`
  line-height: 1.5;
`;
export const Button = styled.button`
  display: block;
  justify-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.project &&
    css`
      background-color: none;

      padding: 0.25rem;
      border: 1px solid #000;
      transition: all 0.25s ease-in-out;

      &:hover {
        background-color: #eee;
        border-color: #eee;
      }
    `}
`;

export const HeaderImgWrapper = styled.div`
  grid-area: 4 / 4 / 7 / 7;
  margin-top: 4rem;

  @media ${devices.mobile} {
    display: none;
  }
`;
export const HeaderImg = styled.img`
  width: 100%;
`;

export const HeaderDetails = styled.div`
  grid-area: 4 / 1 / 7 / 4;
  display: flex;
  gap: 2rem;
  left: 10%;
  justify-content: center;
  position: absolute;
  bottom: -25px;
`;

export const CubeWrapper = styled.div`
  width: 150px;
  height: 150px;

  display: flex;

  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
    position: absolute;
    transform: rotate(45deg);
    background-color: #ddd;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #ddd;
    position: absolute;
    transform: rotate(45deg);
    background-color: #fff;
    border: 1px solid #eee;
  }
`;

export const CubeParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  span {
    font-size: 1rem;
    font-weight: lighter;
  }
`;

/* FOOTER */

export const FooterWrapper = styled.div`
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;
export const FooterSocialLinksWrapper = styled.div``;
export const FooterContent = styled.p``;
