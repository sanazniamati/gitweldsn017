import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'helpers/createMarkup';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  blogPostList,
  menuList1,
  menuList2
} from 'components/pages/landing/components/about/data';
import { bgWhiteIcons } from 'components/pages/landing/components/about/data/socialIcons';
// import { version } from 'config';
import LandingFooter from '../landing-footer/LandingFooter';
import AutoScroll from './AutoScroll';
import FooterTitle from './FooterTitle';
import FooterList from './FooterList';
import FooterBlogList from './FooterBlogList';

const About = () => {
  return (
    <>
      <AutoScroll />
      <Section bg="dark" className="pt-0 pb-4 light">
        <Row>
          <Col lg={4}>
            <FooterTitle>Our Mission</FooterTitle>
            <p className="text-600">
              Falcon enables front end developers to build custom streamlined
              user interfaces in a matter of hours, while it gives backend
              developers all the UI elements they need to develop their web
              app.And it's rich design can be easily integrated with backends
              whether your app is based on ruby on rails, laravel, express or
              any other server side system.
            </p>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col xs={6} md={3}>
                <FooterTitle>Company</FooterTitle>
                <FooterList list={menuList1} />
              </Col>
              <Col xs={6} md={3}>
                <FooterTitle>Product</FooterTitle>
                <FooterList list={menuList2} />
              </Col>
              <Col className="mt-5 mt-md-0">
                <FooterTitle>From the Blog</FooterTitle>
                <FooterBlogList list={blogPostList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <LandingFooter />
    </>
  );
};

export default About;
