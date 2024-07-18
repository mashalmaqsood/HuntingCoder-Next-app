import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json().then((parsed) => {
        setBlogs(parsed);
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogItem.content.substr(0, 150)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

// this functions runs at server side
export const getServerSideProps = async () => {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
};

export default blog;
