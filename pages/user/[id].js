import { useRouter } from "next/router";
const Home = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            How&apos;re you doing {id}!
        </div>
    )
}
export default Home;