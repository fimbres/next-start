import Link from "next/link";

const Home = () => {
    return <div>
        <Link href="/profile">Go to profile page</Link>
        <Link href="/products">Go to products page</Link>
    </div>
}

export default Home;