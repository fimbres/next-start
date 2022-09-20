import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
    const router = useRouter();
    const reviewId = router.query.reviewId;
    const productId = router.query.productId;
    return <h1>Product {productId} Details in Review {reviewId}</h1>
}

export default ProductDetail;