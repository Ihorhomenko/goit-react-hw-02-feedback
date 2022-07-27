import React, { Component } from 'react';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>{el.name}: {el.number}
        <button type='button' onClick={() => onDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
