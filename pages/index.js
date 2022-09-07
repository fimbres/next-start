import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();

    const onClick = () => {
        console.log("Placing your Order");
        router.push('/products');
    };
    
    return <div>
        <Link href="/profile">Go to profile page</Link>
        <Link href="/products">Go to products page</Link>
        <button type="button" onClick={onClick}>Click here</button>
    </div>
}

export default Home;