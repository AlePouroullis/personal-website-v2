import Layout from "@/components/Layout/Layout";
import YoutubeEmbed from "@/components/YoutubeEmbed/YoutubeEmbed";
import styles from "@styles/Loop.module.scss";

const waBotDriverDemoVideoId = "e1mKnipYh5o";
const bookingsWebsiteDemoId = "xo5BllkoS2E";

export default function Loop() {
  return (
    <Layout>
      <h2>Loop</h2>
      <h3>Lead software developer</h3>
      <p className={styles.description}>
        I had known about Loop since the beginning of 2022. Their vision was to revolutionize the minibus taxi industry and the greater mobility sector in South Africa, and later the  Their software ecosystem
        hadn&apos;t been developed at the time I joined; they were still in the
        prototyping phase of their product. My role was to start collecting
        data, set up a bookings platform, create pilots, build a WhatsApp
        chatbot both for our riders and drivers, and speak with stakeholders
        (which include investors, venture builders, our data analytics partner,
        and more) to communicate our needs – essentially oversee all aspects of
        the software.
      </p>
      <YoutubeEmbed embedId={waBotDriverDemoVideoId} />
      <YoutubeEmbed embedId={bookingsWebsiteDemoId} />
    </Layout>
  );
}
