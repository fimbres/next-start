import Link from "next/link";
import React from "react";

const Product = () => {
    return <div>
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
    </div>
}

export default Product;