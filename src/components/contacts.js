import React, { Component } from 'react';

const Contacts = ({contacts, name}) => {
    return (
        <ul>
          {contacts.map(el => (
            <li>{el}</li>
          ))}
        </ul>
      );
}

export default Contacts;
