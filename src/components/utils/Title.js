import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  return <TitleItem>{children}</TitleItem>;
};

export default Title;

const TitleItem = styled.h2`
  padding: 2rem 0;
`;
