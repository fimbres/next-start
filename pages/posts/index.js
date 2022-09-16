import React from 'react';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

const Posts = ({ posts }) => {
  return (
    <>
        <h1>Posts</h1>
        {posts && posts.map(post => {
            return (
                <Link key={post.id} href={`/posts/${post.id}`} passHref>
                    <h2>{post.title}</h2>
                </Link>
            );
        })}
    </>
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