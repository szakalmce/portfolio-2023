import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components//Navbar';
import Projects from '../components/Projects';

import '../styles/reset.css';
import { Wrapper } from '../styles/styles';

const IndexPage = () => {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Header />
        <Projects />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default IndexPage;
