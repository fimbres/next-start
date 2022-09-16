import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "@images/logo.png";

const Home = () => {
    const router = useRouter();
    const user = process.env.DB_USER;

    console.log(user);
    
    const onClick = () => {
        console.log("Placing your Order");
        router.push('/products');
    };
    
    return <div>
        <Image src={Logo} alt="Logo" placeholder="blur" />
        <Link href="/profile">Go to profile page</Link>
        <Link href="/products">Go to products page</Link>
        <button type="button" onClick={onClick}>Click here</button>
    </div>
}

export default Home;