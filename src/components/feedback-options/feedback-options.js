import React from 'react';
import './feedback-options.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button key={el} className="btn" type="button" onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
