import React, { useState } from 'react'

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

  return (
    <div>
        <h1>All Comments</h1>
        <ul>
            {comments && comments.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
        <button onClick={fetchComments}>Load Comments</button>
    </div>
  )
}

export default CommentsPage;