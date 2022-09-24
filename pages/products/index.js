import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

const Product = () => {
    return <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <List component="nav" aria-label="mailbox folders" sx={{width: "100%"}}>
                <Link href="/products/1">
                    <ListItem button>
                        <ListItemText primary="Product 1" />
                    </ListItem>
                </Link>
                <Link href="/products/2">
                    <ListItem button>
                        <ListItemText primary="Product 2" />
                    </ListItem>
                </Link>
                <Link href="/products/3">
                    <ListItem button>
                        <ListItemText primary="Product 3" />
                    </ListItem>
                </Link>
            </List>
        </Container>
    </Box>
}

export default Product;