import React from 'react';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Posts = ({ posts }) => {
    const router = useRouter();

  return (
    <Box sx={{ backgroundColor: "#EEEEEE", height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container sx={{ paddingBottom: 10, paddingTop: 20 }}>
            <Typography textAlign="center" variant="h1" marginBottom={10}>Posts</Typography>
            {posts && posts.map(post => {
                return (
                    <Card sx={{ marginBottom: 5, padding: 4 }} key={post.id}>
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {post.body.substr(0,90)}...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => router.push(`/posts/${post.id}`)}>See More</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Container>
    </Box>
  )
}

export default Posts;

export async function getServerSideProps(context){
    const session = await getSession(context);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return session ? {
        props: {
            posts: data
        }
    } : {
        redirect: {
            destination: '/api/auth/signin?callbackUrl=https://next-start-one.vercel.app/posts',
            permanent: false
        }
    }
}