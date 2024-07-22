import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() { 
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to={"/"}>Home</Link></li>
                <li className={styles.li}><Link to={"/posts"}>Posts</Link></li>
                <li className={styles.li}><Link to={"/create-post"}>New Post</Link></li>
            </ul>
        </header>
    );
}