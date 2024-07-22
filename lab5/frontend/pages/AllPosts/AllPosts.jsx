import { useState, useEffect } from "react";
import Post from "../../components/post/Post";
import styles from "./AllPosts.module.css";

export default function AllPosts() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:3000/api/posts");
            const data = await response.json();
            setPosts(data.data);
        };
        fetchPosts();
    }, [])

    const deletePost = async (postId) => {
        await fetch(`http://localhost:3000/api/posts/${postId}`, {
            method: "DELETE",
        });

        setPosts(posts.filter(post => post._id !== postId));
    };

    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>All Posts</h1>
            <div className={styles.postGrid}>
                {posts.map((post) => (
                    <Post key={post._id} post={post} deleteFunc={deletePost}/>
                ))}
            </div>
        </section>
    );
}