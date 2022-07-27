import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';
import PhoneRegBook from './phonebook';
import Contacts from './contacts';
import Filter from './filter'

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    name: '',
    number: '',
    good: 0,
    neutral: 0,
    bad: 0,
  };
  

  handleBtn = e => {

    if (e.target.textContent === 'good') {
      console.log(this.state.good)
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.textContent === 'neutral') {
      console.log(this.state.neutral)
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.textContent === 'bad') {
      console.log(this.state.bad)
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
    this.setState({contacts: [...this.state.contacts, data]})
  }

  handleChangeFilter = value => {
    this.setState({filter: value})
  }

  handleDelete = id => {
    this.setState(prevState => ({contacts: prevState.contacts.filter((contact) => contact.id !== id)}))
  }
  

  render() {
    
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);
    const normalazeFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalazeFilter))
    return (
      <div>
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
        <div className='btns'>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleBtn}
        />
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={good === 0 ? 0 : positiveFeedback}
        />
      </section>
        <section>
          <PhoneRegBook onSubmit={this.handleSubmitForm}/>
        </section>
        <section>
          <Filter onFilter={this.handleChangeFilter}/>
          <h2>Contacts</h2>
          <Contacts contacts={visibleContacts} onDelete={this.handleDelete}/>
        </section>
      </div>
      
    );
  }
}

export default App;
