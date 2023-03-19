import Head from "next/head";
import About from "@components/homePage/About/About";
import Layout from "@components/Layout/Layout";
import Projects from "@components/homePage/Projects/Projects";
import Work from "@components/homePage/Work/Work";
import styles from "@styles/Home.module.scss";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alé Pouroullis</title>
        <meta
          name="description"
          content="
          Home to Alé Pouroullis – software engineer and machine learning enthusiast based in sunny Cape Town.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <section id="about">
            <About />
          </section>
          <section id="work">
            <div className={styles.sectionHeader}>
              <h2>work</h2>
            </div>
            <Work />
          </section>
          <section id="projects">
            <div className={styles.sectionHeader}>
              <h2>projects</h2>
            </div>
            <Projects />
          </section>
        </main>
      </Layout>
    </>
  );
}
