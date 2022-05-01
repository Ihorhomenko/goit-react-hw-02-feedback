import React from 'react';
import './feedback-options.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button className="btn" type="button" onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
};

export default FeedbackOptions;
