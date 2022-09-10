import React from 'react'

const User = (props) => {
  return (
    <li>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
    </li>
  )
}

export default User;