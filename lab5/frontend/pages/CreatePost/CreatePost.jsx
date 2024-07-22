import { useParams } from "react-router-dom";
import styles from "./CreatePost.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data.data.title);
          setAuthor(data.data.author);
          setText(data.data.text);
        });
    }
  }, [id]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: title,
      author: author,
      text: text,
    };

    setIsSubmitting(true);

    if (id) {
      fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          navigate("/posts");
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      fetch(`http://localhost:3000/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          navigate("/posts");
        
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>{id ? `Editing post #${id}` : "Creating new Post"}</h1>
        <form className={styles.form} action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleTitleChange(e)}
          />
          <input
            className={styles.input}
            type="text"
            name="author"
            value={author}
            onChange={(e) => handleAuthorChange(e)}
          />
          <textarea
            className={styles.textarea}
            name="text"
            value={text}
            onChange={(e) => handleTextChange(e)}
          ></textarea>
          <button disabled={isSubmitting} className={styles.button} type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
