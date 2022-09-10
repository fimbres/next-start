import React from 'react';
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <>
        <h1>Posts</h1>
        {posts.map(post => {
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
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}