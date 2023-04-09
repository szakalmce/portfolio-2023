import React from 'react';

import {
  SocialLinksWrapper,
  SocialLinkItem,
  SocialLink,
} from '../../styles/styles';

import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialLinks = ({ footer }) => {
  return (
    <SocialLinksWrapper>
      <SocialLinkItem footer>
        <SocialLink>
          <BsFacebook />
        </SocialLink>
      </SocialLinkItem>

      <SocialLinkItem footer>
        <SocialLink>
          <BsGithub />
        </SocialLink>
      </SocialLinkItem>

      <SocialLinkItem footer>
        <SocialLink>
          <BsLinkedin />
        </SocialLink>
      </SocialLinkItem>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
