import Link from "next/link";
import styles from "./Work.module.scss";

export default function Work() {
  return (
    <section className={styles.section}>
      <section className={styles.workItem}>
        <div className={styles.workItemHeader}>
          <h3>Loop</h3>
        </div>
        <div className={styles.text}>
          <p className={styles.main}>
            Loop is a Cape-Town based startup aiming to digitalize public
            transport in South Africa, particularly the notorious minibus taxi
            industry. I joined in mid-2022 as their only software developer,
            with the responsibility of building the foundations of their
            software ecosystem.
          </p>
          <p>
            <Link href="/work/loop">Read more here</Link>
          </p>
        </div>
      </section>
      <section className={styles.workItem}>
        <div className={styles.workItemHeader}>
          <h3>Elevat3d</h3>
        </div>
        <div className={styles.text}>
          <p className={styles.main}>
            Elevat3d is a B2B SaaS for mines used for analyzing and optimizing
            their blasting operations. The service is a web-based application
            that uses aerial photographs of blast sites and analyzes them using
            machine learning and algoirthms to provide insights and generate
            reports. I started off working exclusively on the user interface,
            but the scope of my work eventually expanded to the backend and
            devops.
          </p>
          <p>
            <Link href="/work/elevat3d">Read more here</Link>
          </p>
        </div>
      </section>
    </section>
  );
}
