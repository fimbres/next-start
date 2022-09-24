import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return <Box sx={{ backgroundColor: "#EEEEEE", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Container>
            <Paper elevation={3} sx={{ padding: 15 }}>
                <Typography textAlign="center" variant="h2">Product {productId} Details...</Typography>
            </Paper>
        </Container>
    </Box>
}

export default ProductDetail;