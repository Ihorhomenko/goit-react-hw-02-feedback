import React, { Component } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedback-options/feedback-options';
import PhoneRegBook from './phonebook/phonebook';
import Contacts from './contacts/contacts';
import Notification from './notifications/notification';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = e => {
    if (e.target.textContent === 'good') {
      console.log(this.state.good);
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.textContent === 'neutral') {
      console.log(this.state.neutral);
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.textContent === 'bad') {
      console.log(this.state.bad);
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  handleSubmitForm = data => {
    this.setState({ contacts: [...this.state.contacts, data] })
  };

  handleChangeFilter = value => {
    this.setState({ filter: value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);
    const normalazeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazeFilter)
    );
    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <div className="btns">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleBtn}
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
        <section className='phonebook'>
        <h2>Phonebook</h2>
        <div className="phone-reg-book">
          <PhoneRegBook onSubmit={this.handleSubmitForm} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter onFilter={this.handleChangeFilter} />
          <Contacts contacts={visibleContacts} onDelete={this.handleDelete} />
        </div>
        </section>
      </div>
    );
  }
}

export default App;
