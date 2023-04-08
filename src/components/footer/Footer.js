import React from 'react';
import { useState } from 'react';
import {
  FooterWrapper,
  FooterSocialLinksWrapper,
  FooterContent,
} from '../../styles/styles';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  const [value, setValue] = useState(0);

  console.log(process.env.REACT_APP_CONTENTFUL_TOKEN);
  const handleClick = () => {
    setValue((prevState) => {
      const state = prevState + 1;
      console.log(state);
      return state;
    });
  };

  return (
    // <FooterWrapper>
    //   <FooterSocialLinksWrapper>
    //     <SocialLinks footer />
    //     {value}
    //   </FooterSocialLinksWrapper>
    //   <FooterContent onClick={handleClick}>
    //     &copy; 2023 Tomasz Garbarz. All rights reserved.
    //   </FooterContent>
    // </FooterWrapper>
    <p>eki</p>
  );
};

export default Footer;
