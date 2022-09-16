import Link from "next/link";
import Head from "next/head";

const PageNotFound = () => {
    return <div>
        <Head>
            <title>Not Found!</title>
            <meta name="description" content="Free Stuff" />
        </Head>
        <div>Page Not Found!</div>
        <Link href="/">Go to Home Page</Link>
    </div>
}

export default PageNotFound;