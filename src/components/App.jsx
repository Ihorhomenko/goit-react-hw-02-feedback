import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = e => {
    console.log(e.target.textContent);
    if (e.target.textContent === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.textContent === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.textContent === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);
    return (
      <section>
        {/* <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleGood}>
            good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            bad
          </button>
        </div> */}
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleBtn}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={good === 0 ? 0 : positiveFeedback}
        />
      </section>
    );
  }
}

export default App;
