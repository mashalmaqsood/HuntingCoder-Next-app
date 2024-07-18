import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        <div className="blogItem">
            <Link href={"/blogpost/learn-javacript"}>
          <h3>How to learn javascript in 2024?</h3>
            </Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn javascript in 2024?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn javascript in 2024?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default blog;
