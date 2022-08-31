import React from 'react';
import NavbarStandard from './components/navbar_standard/NavbarStandard';
import Services from './components/services/Services';
import About from './components/about/About';
import CreateBlob from './components/create-blob/CreateBlob';
import Button from 'react-bootstrap/Button';
const Landing = () => {
  const handel = () => {};
  return (
    <>
      <NavbarStandard />
      <Services />
      <Button variant="success" onClick={handel}>
        Success
      </Button>
      <CreateBlob />
      <About />
    </>
  );
};

export default Landing;
