import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

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
      <div>Hello world</div>
      <Image
        src="https://i.ibb.co/3Csst9c/close-up-smile-no-teeth.jpg"
        width="500"
        height="500"
        style={{ objectFit: "contain" }}
        alt="me"
      />
    </>
  );
}
