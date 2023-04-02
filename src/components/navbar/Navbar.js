import React from 'react';
import {
  NavbarWrapper,
  Logo,
  SocialLinksWrapper,
  SocialLinkItem,
  SocialLink,
} from '../../styles/styles';

import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        Tomasz<span>Garbarz</span>
      </Logo>
      <SocialLinksWrapper>
        <SocialLinkItem>
          <SocialLink>
            <BsFacebook />
          </SocialLink>
        </SocialLinkItem>

        <SocialLinkItem>
          <SocialLink>
            <BsGithub />
          </SocialLink>
        </SocialLinkItem>

        <SocialLinkItem>
          <SocialLink>
            <BsLinkedin />
          </SocialLink>
        </SocialLinkItem>
      </SocialLinksWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
