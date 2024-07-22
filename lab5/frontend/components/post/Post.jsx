import styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post({ post, deleteFunc }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.postID}>Post #{post._id}</h3>
        <div className={styles.buttons}>
          <Link className={styles.editBtn} to={`/edit-post/${post._id}`}>
            <img src="/edit.svg" alt="" />
          </Link>
          <button className={styles.deleteBtn} onClick={() => deleteFunc(post._id)}>
            <img src="/delete.svg" alt="" />
          </button>
        </div>
      </div>
      <h4 className={styles.title}>{post.title}</h4>
      <p className={styles.text}>{post.text}</p>
      <p className={styles.author}>by {post.author}</p>
    </div>
  );
}
