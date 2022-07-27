import React, { Component } from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li>{el.name}: {el.number}</li>
      ))}
    </ul>
  );
};

export default Contacts;
