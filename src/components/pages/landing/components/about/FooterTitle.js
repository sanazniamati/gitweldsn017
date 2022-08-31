import React from 'react';
import PropTypes from 'prop-types';

const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-600 opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

export default FooterTitle;
