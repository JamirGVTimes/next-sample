import Header from 'next/head';
import { Button } from 'antd';
const Home = () => {
    return (
        <div>
            <Header>
                <title> Home Index</title>
            </Header>
            Welcome to Bgimahood Home page
            <Button type='primary'> Click Me</Button>
        </div>
    )
}
export default Home;