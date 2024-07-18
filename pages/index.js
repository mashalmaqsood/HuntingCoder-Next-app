import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <div className={styles.imagewrap}>
          <Image
            className={styles.myImg}
            src="/homeimg.avif"
            width={278}
            height={300}
          />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2024?</h3>
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
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
