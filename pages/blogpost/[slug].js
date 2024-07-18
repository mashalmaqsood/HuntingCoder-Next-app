import React from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Blogpost.module.css'
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug} </h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          explicabo harum quam corrupti, delectus, enim sit porro error nulla,
          distinctio magni at. Obcaecati!
        </div>
      </main>
    </div>
  );
};

export default slug;
