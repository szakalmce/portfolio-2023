import React from 'react';
import { useState } from 'react';
import {
  FooterWrapper,
  FooterSocialLinksWrapper,
  FooterContent,
} from '../styles/styles';
import SocialLinks from './SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocialLinksWrapper>
        <SocialLinks footer />
      </FooterSocialLinksWrapper>
      <FooterContent>
        &copy; 2023 Tomasz Garbarz. All rights reserved.
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
