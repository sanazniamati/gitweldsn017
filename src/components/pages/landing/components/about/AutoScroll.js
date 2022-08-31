import Section from '../../../../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AutoScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Section bg="dark" className="pt-8 pb-4 light">
        {/*TODO*/}
        <div
          className="position-absolute btn-back-to-top cursor-pointer  "
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon="chevron-up"
            transform="rotate-45"
            className="text-600"
          />
        </div>
      </Section>
    </>
  );
};
export default AutoScroll;
