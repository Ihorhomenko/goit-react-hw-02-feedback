import React, { Component } from 'react';

class PhoneRegBook extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        console.log(name, number);
        this.props.onSumit({ name, number });
        form.reset();
}

render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name
            <input type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
        </label>
        <label> Number
            <input type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
        </label>
        
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

export default PhoneRegBook;

