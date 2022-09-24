import React from 'react';
import { User } from '@components/user';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';

const Users = ({ users }) => {
  return (
    <Box sx={{ backgroundColor: "#EEEEEE", height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container sx={{ paddingBottom: 10, paddingTop: 20 }}>
            <Typography textAlign="center" variant="h1" marginBottom={10}>All Users</Typography>
            {users && users.map(user => {
                return (
                    <Card sx={{ marginBottom: 5, padding: 4 }} key={user.id}>
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" gutterBottom>
                                {user.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {user.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => console.log(user.name)}>Console log</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Container>
    </Box>
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
