import styles from "./Footer.module.scss";

const buildDate = new Date(
  process.env.BUILD_DATE || Date.now()
).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <span>&#169; 2023 Alexandros Pouroullis </span>
      </div>
      <div className={styles.updatedAtContainer}>Last updated: {buildDate}</div>
    </footer>
  );
}
