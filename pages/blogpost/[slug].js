import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const Slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch( `http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json().then((parsed) => {
        setBlog(parsed);
      });
    });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <hr />
        <div>{blog?.content}</div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
 const { slug } = context.query;
 let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
 let allBlogs = await data.json();
 return {
  props : {allBlogs}
 }
};

export default Slug;
