import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.allBlogs);
  function createMarkup(content) {
    return {__html: content};
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <hr />
        {blog &&  <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div> }
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-reactjs" } },
    ],
    fallback: true 
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogposts/${slug}.json`, "utf-8");
  return {
    props: {
      myBlog: JSON.parse(myBlog),
    },
  };
};


export default Slug;
