import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keyword" content="ninjas"></meta>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis
        temporibus impedit sint? Laudantium consequuntur, odio voluptate
        nesciunt perferendis impedit mollitia!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis
        temporibus impedit sint? Laudantium consequuntur, odio voluptate
        nesciunt perferendis impedit mollitia!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
  );
}
