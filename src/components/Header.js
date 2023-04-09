import React from 'react';

import {
  HeaderWrapper,
  HeaderContent,
  HeaderTitle,
  Paragraph,
  Button,
  HeaderImgWrapper,
  HeaderImg,
  HeaderDetails,
  CubeWrapper,
  CubeParagraph,
} from '../styles/styles';

import img from '../images/header-image.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>Project-Based Web Dev Courses</HeaderTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          tenetur facilis alias tempore, nulla culpa ipsa doloremque eum. Rerum,
          doloremque.
        </Paragraph>
        <Button>Enroll Now</Button>
      </HeaderContent>

      <HeaderDetails>
        <CubeWrapper>
          <CubeParagraph>
            +10 <span>Projects</span>
          </CubeParagraph>
        </CubeWrapper>
        <CubeWrapper>
          <CubeParagraph>
            +10 <span>Projects</span>
          </CubeParagraph>
          nh
        </CubeWrapper>
      </HeaderDetails>

      <HeaderImgWrapper>
        <HeaderImg src={img} />
      </HeaderImgWrapper>
    </HeaderWrapper>
  );
};

export default Header;
