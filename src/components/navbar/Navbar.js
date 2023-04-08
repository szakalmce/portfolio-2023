import React from 'react';
import {
  NavbarWrapper,
  Logo,
  SocialLinksWrapper,
  SocialLinkItem,
  SocialLink,
} from '../../styles/styles';
import SocialLinks from '../SocialLinks/SocialLinks';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        Tomasz<span>Garbarz</span>
      </Logo>
      <SocialLinks />
    </NavbarWrapper>
  );
};

export default Navbar;
