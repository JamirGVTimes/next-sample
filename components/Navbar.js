import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.links}>
            <ul>
                <li><Link href="/"> Home </Link> </li>
                <li> <Link href="/user"> About us </Link></li>
                <li>  FAQ</li>
            </ul>
            
              
        </div>
    )
}
export default Navbar;