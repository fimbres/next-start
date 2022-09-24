import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Paper, Typography } from '@mui/material';

function Post({ post }) {
    const router = useRouter();

  return (
    <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container>
            <Paper elevation={3} sx={{ padding: 15 }}>
                <Typography textAlign="center" variant="h2">{router.isFallback ? "Loading..." : post.title}</Typography>
            </Paper>
        </Container>
    </Box>
  )
}

export default Post;

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    const paths = data.map(post => { 
        return { 
            params: { 
                postId: `${post.id}`,
            }
        }
    });

    return {
        paths,
        fallback: true,
    }
}