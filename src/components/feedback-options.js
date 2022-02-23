import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button type="button" onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
};

export default FeedbackOptions;
