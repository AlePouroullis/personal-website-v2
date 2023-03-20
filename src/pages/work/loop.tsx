import Layout from "@/components/Layout/Layout";
import YoutubeEmbed from "@/components/YoutubeEmbed/YoutubeEmbed";
import styles from "@styles/workPage.module.scss";
import Image from "next/image";

const waBotDriverDemoVideoId = "e1mKnipYh5o";
const bookingsWebsiteDemoId = "xo5BllkoS2E";

export default function Loop() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Loop</h2>
            <h3 className={styles.subheading}>Lead software developer</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "30px 0",
              }}
            >
              <Image
                style={{ margin: "0 auto" }}
                src="/images/loop/loop-logo-full.svg"
                alt="Loop logo"
                height={100}
                width={200}
              />
            </div>
            <p>
              Loop is a service that aims to digitalize the notorious minibus
              taxi industry in South Africa, and ultimately public transport on
              the African continent. The 3 pillars it aims to address are
              geolocation, payments, and safety.
            </p>
          </div>

          <div className={styles.content}>
            <h4>2022</h4>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                I was introduced to Loop in the first quarter of 2022. Their
                software ecosystem hadn&apos;t been established at the time I
                joined; they were still in the prototyping phase. My role was to
                build the foundations of the software. <br />
                <br />
                At the outset, all the company had was a Wordpress website for
                making bookings. In the first meeting I had with the team, I was
                asked &quot;What next?&quot;. I came on board with little to no
                experience working on backend systems, with the exception of
                some reading I did on cloud services, particularly AWS, which I
                was doing for the student marketplace platform I was wanting to
                build, but sidelined after being onboarded. The first thing I
                suggested was that we create a source of truth for the rest of
                the system. With the knowledge I had from the reading I did, I
                thought of using webhooks on payment which we could consume on
                our web server and store in a database. I hardly knew what a web
                server constituted, but I guessed that something like this would
                work. Turns out, I got it right. Very rapidly, I accelerated
                from being completely and utterly clueless to being a competent architect (but still a little clueless hehe).
                <br />
                <br />
                Soon after that, we were told that the Premier of the Western
                Cape along with other officials from government wanted to demo
                our product. Problem was, we didn&apos;t have anything to demo
                yet. I was tasked with building a WhatsApp chatbot that would
                give them a taste of what technology would look like in this
                space. I had a week to do it. Fortunately I had experience
                working with webhooks and web servers to consume them. But the
                new challenge was tracking context of conversations using a
                database. I opted for using a NoSQL database which allowed for
                more flexibility in storing the message payloads, but it meant I
                had to figure out the new access patterns that are used with
                them. Coming up to demo day, I pulled off 3 consecutive nights
                coding until 7am. I must admit, I was completely crushed by the
                end of it, but at least it made for a damn cool experience.
              </p>

              <p className={styles.center}>And I got this photo :P </p>
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className={styles.imageContainer}>
                <Image
                  alt="Me with the Western Cape Premier"
                  className={styles.image}
                  src="/images/loop/me-with-the-premier.jpg"
                  width={400}
                  height={400}
                />
                <figcaption className={styles.imageCaption}>
                  Me with the Premier of the Western Cape, Alan Winde (right of image), and, at
                  the time, Minister of Parliament, Ricardo Mackenzie (left of image), now the
                  Minister of Mobility in the Western Cape.
                </figcaption>
              </div>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                After the demo, it was time to start working on the actual
                product; our go-to-market strategy was to begin with group
                ridesharing – essentially Uber using minibus taxis during their
                off-peak hours. The Wordpress website roughly did this, but we
                had very little control over the data and product. I advised we
                build our own web application, which we ended up agreeing on. I
                spent the next couple of weeks building that out, along with the
                database, integrating the Google Maps API and payments using
                Paystack, setting up the code pipeline, and so on. Along with
                that, we wanted to issue notifications to our drivers via
                WhatsApp when bookings were made. The last of the work I did
                before my university holidays was WhatsApp notifications for our
                riders, along with scheduling notifications using an event
                queue.
                <br />
                <br />
                Below are demos showcasing the bookings web application and the
                driver notifications on WhatsApp.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                <div className={styles.videoContainer}>
                  <YoutubeEmbed embedId={bookingsWebsiteDemoId} />
                </div>
                <div className={styles.videoContainer}>
                  <YoutubeEmbed embedId={waBotDriverDemoVideoId} />
                </div>
              </div>
              <p className={styles.text}>
                I spent part of my end-of-year holiday while I was in England
                visiting my family building out our affiliates program as well
                as an admin portal for us to handle operations.
                <br />
                <br />
                It felt great looking back on all that I learnt over the year
                and the projects that I was fortunate enough to be part of. But
                there was lots more to come in the upcoming year.
              </p>
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className={styles.imageContainer}>
                <Image
                  alt="The Loop team"
                  className={styles.image}
                  src="/images/loop/the-team.jpeg"
                  width={500}
                  height={400}
                />
                <figcaption className={styles.imageCaption}>
                  The Loop team in its early days. Back row (left to right):
                  Jason Bruce-Brand (COO), Imtiyaaz Riley (CEO), Jamie Thurston
                  Wyngaard (CXO); front row (left to right): Rodrigo da Naya
                  (Head of sales), Alexandros P. Pouroullis
                </figcaption>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h4>2023</h4>
            <div className={styles.textWrapper}>
              <p>
                In the first quarter of 2023, we employed two software interns
                whom I helped onboard and familiarize with the tools and
                codebase. The goal of the year is to introduce digital payments
                with the support of Visa, install telematics devices on taxis,
                collect and analyze data with the help of our data partner and
                investor Indsigt, and introduce our book-a-seat service for
                staff transport.
                <br />
                <br />
                This is an ongoing process which I&apos;ll be updating as we go
                along.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
