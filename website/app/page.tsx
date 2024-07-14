import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p style={{fontWeight:"bolder"}}>
          🚀 New Components Update Soon
        </p>
        <div>
          <a href="https://www.producthunt.com/posts/nextjs-reusable-components-nxtu?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nextjs&#0045;reusable&#0045;components&#0045;nxtu" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464054&theme=dark" alt="NxtU | Product Hunt" style={{ width: "250px", height: "54px" }} />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <img
          src="/nxtu.png"
          alt="Next.js Logo"
          style={{ filter: "invert(100%);" }}
          width={200}
          height={160}
        />
      </div>

      <div className={styles.grid}>
        <a
          href="//docs.nxtu.dev"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="//docs.nxtu.dev/components"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Components <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Demo <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contribute <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
