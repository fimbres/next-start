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

export async function getStaticProps(){
    const session = await getSession();
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: session?.user ? data : null
        },
        revalidate: 10,
    }
}