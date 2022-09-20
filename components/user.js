import React from 'react';

export const User = ({ name, email, onClick }) => {
  return (
    <li>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <button onClick={onClick}>Click</button>
    </li>
  )
}