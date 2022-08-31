import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { version } from 'config';
const LandingFooter = () => {
  return (
    <>
      <section className=" bg-dark py-0 text-center fs--1 light">
        <hr className="my-0 border-600 opacity-25" />
        <div className="container py-3">
          <Row className="justify-content-between">
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">
                Thank you for creating with Falcon{' '}
                <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
                <a
                  className="text-white opacity-85"
                  href="https://themewagon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ThemeWagon
                </a>
              </p>
            </Col>
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">v{version}</p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default LandingFooter;
