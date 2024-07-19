import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
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

export const getStaticProps = (async (context) => {
  let data = await fs.promises.readdir("blogposts");
  const newData = data.slice(1);
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < newData.length; i++) {
    const item = newData[i];
    myFile = await fs.promises.readFile("blogposts/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
})

export default Blog;
