import * as React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Projects from '../components/Projects/Projects';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </>
  );
};

export default IndexPage;
