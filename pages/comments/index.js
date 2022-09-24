import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react'

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    console.log(comments)

  return (
    <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Container sx={{ textAlign: "center" }}>
        <Typography textAlign="center" variant="h1" marginBottom={10}>All Comments</Typography>
        <List sx={{ width: "100%", marginBottom: 10}}>
          {comments && comments.map(item => 
            <ListItem key={item.id}>
              <ListItemText
                primary={item.text}
                secondary={"Comment id: " + item.id}
              />
            </ListItem>
          )}
        </List>
        <Button variant="contained" onClick={fetchComments}>Load Comments</Button>
      </Container>
    </Box>
  )
}

export default CommentsPage;