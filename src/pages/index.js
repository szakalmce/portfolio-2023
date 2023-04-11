import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components//Navbar';
import Projects from '../components/Projects';

import '../styles/reset.css';
import { Wrapper } from '../styles/styles';
import { useRef } from 'react';

const IndexPage = () => {
  const myRef = useRef();

  const scrollToMyRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', duration: '1000' });
  };

  return (
    <div>
      <Wrapper>
        <Navbar />
        <Header scrollToMyRef={scrollToMyRef} />
        <Projects myRef={myRef} />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default IndexPage;
