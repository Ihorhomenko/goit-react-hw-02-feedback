import React, { Component } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedback-options/feedback-options';
import Notification from './notification/notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const name = e.target.textContent;
    this.setState(prevState => ({
    [name]: prevState[name] + 1,
    }));
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);

    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <div className="btns">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleClick}
            />
          </div>
          <div>
            {good > 0 || neutral > 0 || bad > 0  ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={good === 0 ? 0 : positiveFeedback}
              />
            ) : (
              <Notification text="Here is no feedback" />
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
