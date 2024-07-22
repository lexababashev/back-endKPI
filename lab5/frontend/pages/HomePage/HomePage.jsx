import styles from './HomePage.module.css';

export default function HomePage() {
    return (
        <section className={styles.section}>
            <h1 className={styles.home}>Personal Blog</h1>
            <p className={styles.p}>Made with React and Express</p>
        </section>
    );
}