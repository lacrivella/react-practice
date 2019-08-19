import React from 'react';
import PropTypes from 'prop-types';

function Form({ text, handleTextChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        placeholder="type text here"
        onChange={handleTextChange} />
      <button>Add</button>
    </form>
  );
}

Form.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
