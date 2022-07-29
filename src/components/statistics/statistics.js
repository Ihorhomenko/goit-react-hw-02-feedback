import React from 'react';
import PropTypes from 'prop-types'
import './statistics.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2 className='title'>Statistics</h2>
      <p className='state'>Good: <span className='state-number'>{good}</span></p>
      <p className='state'>neutral: <span className='state-number'>{neutral}</span></p>
      <p className='state'>bad: <span className='state-number'>{bad}</span></p>
      <p className='state'>Total: <span className='state-number'>{total}</span></p>
      <p className='state'>Positive feedback: <span className='state-number'>{positiveFeedback} %</span></p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
}

export default Statistics;
