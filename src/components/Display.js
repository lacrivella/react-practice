import React from 'react';
import PropTypes from 'prop-types';

function Display({ textInput }) {
  return (
    <section>
      <span>{textInput}</span>
    </section>
  );
}

Display.propTypes = {
  textInput: PropTypes.string.isRequired
};

export default Display;
