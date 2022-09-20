import React from 'react';
import { User } from '@components/user';

const Users = ({ users }) => {
  return (
    <div>
        <ul>
            {users.map((user, index) => <User key={index} name={user.name} email={user.email}/>)}
        </ul>
    </div>
  )
};

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
};
