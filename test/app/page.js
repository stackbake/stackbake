import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
location.href = "docs.nxtu.dev"

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <img
          src="/logo.png"
          width={'150px'}
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.nxtu.dev/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Demos <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about NXTU.</p>
        </a>

        <a
          href="https://docs.nxtu.dev/getting-started"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Get Started <span>-&gt;</span>
          </h2>
          <p>Learn how to start with using the package</p>
        </a>

        <a
          href="https://docs.nxtu.dev/components"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Components <span>-&gt;</span>
          </h2>
          <p>Explore the components available.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Contribute <span>-&gt;</span>
          </h2>
          <p>
            Be part of our Open-Source team, and contribute more
          </p>
        </a>
      </div>
    </main>
  );
}
