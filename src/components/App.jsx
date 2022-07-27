import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';
import PhoneRegBook from './phonebook';
import Contacts from './contacts'

class App extends Component {
  state = {
    contacts: ['maks', 'andry', 'dima'],
    name: ''
  }
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // handleBtn = e => {
    
  //   if (e.target.textContent === 'good') {
  //     console.log(this.state.good)
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   }
  //   if (e.target.textContent === 'neutral') {
  //     console.log(this.state.neutral)
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   }
  //   if (e.target.textContent === 'bad') {
  //     console.log(this.state.bad)
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   }
  // };
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
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);
    return (
      <div>
        <section><PhoneRegBook/></section>
        <section>
          <h2>Contacts</h2>
          <Contacts contacts={this.state.contacts}/>
        </section>
      </div>
      // <section>
      //   {/* <div>
      //     <h2>Please leave feedback</h2>
      //     <button type="button" onClick={this.handleGood}>
      //       good
      //     </button>
      //     <button type="button" onClick={this.handleNeutral}>
      //       neutral
      //     </button>
      //     <button type="button" onClick={this.handleBad}>
      //       bad
      //     </button>
      //   </div> */}
      //   <div className='btns'>
      //   <FeedbackOptions
      //     options={['good', 'neutral', 'bad']}
      //     onLeaveFeedback={this.handleBtn}
      //   />
      //   </div>
      //   <Statistics
      //     good={good}
      //     neutral={neutral}
      //     bad={bad}
      //     total={total}
      //     positiveFeedback={good === 0 ? 0 : positiveFeedback}
      //   />
      // </section>
    );
  }
}

export default App;
