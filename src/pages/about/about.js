import React from 'react';
import PropTypes from 'prop-types';

export default function About({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

About.propTypes = {
  name: PropTypes.string.isRequired
};
