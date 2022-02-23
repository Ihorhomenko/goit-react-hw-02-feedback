import React from 'react';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback} %</p>
    </div>
  );
};

export default Statistics;
