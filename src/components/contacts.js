import React, { Component } from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default Contacts;
