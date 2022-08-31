import React from 'react';
import NavbarStandard from './components/navbar_standard/NavbarStandard';
import Services from './components/services/Services';
import About from './components/about/About';
import CreateBlob from './components/create-blob/CreateBlob';

const Landing = () => {
  return (
    <>
      <NavbarStandard />
      <Services />

      <CreateBlob />
      <About />
    </>
  );
};

export default Landing;
