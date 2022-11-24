import Link from "next/link";
import Head from "next/head";
const PageNotFound = () => {
    return (
        <div>
            <Head>
                <title> Page not found</title>
            </Head>
            <h2>404 Page not found </h2>
            <Link href="/">Click here to go back</Link>
        </div> 
    )
}
export default PageNotFound;