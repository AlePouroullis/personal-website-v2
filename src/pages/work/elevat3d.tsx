import Layout from "@/components/Layout/Layout";
import YoutubeEmbed from "@/components/YoutubeEmbed/YoutubeEmbed";
import styles from "@styles/workPage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Elevat3d() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Elevat3d</h2>
            <h3 className={styles.subheading}>
              Co-founder; full-stack developer
            </h3>
            <p>
              Elevat3d is B2B SaaS that helps mines optimize and gain insights
              into their blasting operations by using machine learning and
              algorithms to analyze aerial photographs of blasting sites.
            </p>
          </div>
          <div className={styles.content}>
            <h4>2022</h4>

            <div className={styles.textWrapper}>
              <p className={styles.text}>
                While I was in Johannesburg for my mid-year break, I went to
                have breakfast with my uncle and cousin. They were discussing a
                business idea that my cousin&apos;s friend had proposed to my
                uncle who works in the mining industry as a data engineer. I
                didn&apos;t catch much of the conversation besides the fact that
                the project was a software product that uses aerial
                photographs taken by drones to analyze blast sites. <br />
                <br />I had just taken a break from machine learning to explore
                web development, so hearing of a project at the intersection of
                the two piqued my interest. I asked my uncle to send me the
                documents that were sent to him regarding the project and the
                contact number of my cousin&apos;s friend (who I&apos;ll call by
                his real name, Tim, onwards).
                <br />
                <br />
                After getting into contact with Tim, we scheduled a call to make
                introductions. Tim&apos;s friend Roberto, was the only frontend
                developer at that point. At that time, the only experience I had
                with web development was a few weeks of working on my own
                portfolio website in React with NextJs. He showed me a demo
                (below) that blew me away.
              </p>
              <div
                className={styles.videoContainer}
                style={{ margin: "20px 0" }}
              >
                <YoutubeEmbed embedId="wPcqRKO5XwY" />
              </div>
              <div className={styles.videoContainer}></div>
              <div className={styles.textWrapper}>
                <p className={styles.text}>
                  In truth, I was overwhelmed and thought I wouldn&apos;t have a
                  standing chance at this. But I took it head-on anyways. After
                  walking through the demo, the first thing I noticed was that
                  there was no indication that the photo was being processed
                  after performing hole detection (drawing bounding boxes on the
                  image). I asked Tim if he had any plans to add a loading
                  indicator, and he said that was precisely the task he was
                  going to assign to me, which I was suppose made for a good
                  first impression.
                  <br />
                  <br />
                  It took me 30 hours of reading documentation and exploring the
                  code base before I modified a single line of code. It was a
                  hell of a long process, but I prevailed, and the confidence I
                  gained from it enabled me to work substantially faster later
                  on.
                  <br />
                  <br />
                  We were seeking investment from some investors in South
                  Africa, but time was tight with Tim having to leave to
                  Switzerland to do his master&apos;s in Robotics, Systems and
                  Control at ETH. The goal was to get it to the MVP stage before
                  September. Roberto, my other colleague, was also starting to
                  contribute less due to his full-time job becoming increasingly
                  demanding, so I had to shoulder practically all of the
                  frontend work for this last stretch. It was a big push, but we
                  managed to get it over the line.
                  <br />
                  <br />
                  The investors ultimately decided not to pursue us further. But
                  we had another opportunity in the pipeline: Y Combinator,
                  which Tim applied to just before leaving. We were notified a
                  couple months later that we got the interview, which we were
                  quite shocked to hear. We put the project on hiatus in the
                  time between the application and the interview because Tim had
                  to attend to his studies, and I had just taken on the role of
                  lead software developer at <Link href="/work/loop">Loop</Link>
                  , so not much progress was made. <br />
                  <br />
                  The verdict of the interview was that the investors
                  didn&apos;t see how we could get customers considering that we
                  didn&apos;t manage to make much progress since the
                  application. This was a reasonble judgement, and we knew
                  exactly what we did wrong.
                  <br />
                  <br />
                  After this point, things quietened down for some time while I
                  was on holiday in England. But I decided to arrange an
                  impromptu trip to Zürich to visit Tim in hopes of revitalizing
                  the project.
                </p>
                <div style={{ marginBottom: "15px" }} className={styles.center}>
                  That&apos;s when this happened:
                </div>
                <div
                  style={{ marginBottom: "30px" }}
                  className={styles.imageContainer}
                >
                  <Image
                    className={styles.image}
                    src="/images/elevat3d/me-and-tim-in-zurich.jpg"
                    alt="Me and Tim in Zürich"
                    height={300}
                    width={300}
                  />
                  <figcaption className={styles.imageCaption}>
                    Me and Tim in Zürich by the plaza in front of the main hall
                    of ETH.
                  </figcaption>
                </div>
                <div
                  className={styles.textWrapper}
                  style={{ marginBottom: "15px" }}
                >
                  <p className={styles.text}>
                    We spent the weekend splitting our time between exploring
                    Zürich and planning the next steps for Elevat3d. One of the
                    important changes was that I would be elevated (very funny)
                    to co-founder status. We headed to the student project house
                    to brainstorm and draw out new screens, which resulted in
                    some beautiful diagrams.
                  </p>
                </div>

                <div
                  className={styles.imageContainer}
                  style={{ marginBottom: "30px" }}
                >
                  <Image
                    className={styles.image}
                    src="/images/elevat3d/whiteboard-session.jpg"
                    alt="Whiteboard session"
                    height={300}
                    width={300}
                  />
                  <figcaption className={styles.imageCaption}>
                    A not-so-pretty diagram of the new interface for one of the
                    screens.
                  </figcaption>
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.text}>
                    And so it was: we would be picking things up again in 2023,
                    revise the interface, get clients using the product, and
                    re-apply to the Y Combinator programme for the &apos;23
                    Summer batch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h4>2023</h4>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                I spent the beginning of 2023 dividing my time between Loop, my
                studies, but mostly Elevat3d. After lots of work, a major
                restructuring of the frontend and the database, we managed to
                complete v2 of the MVP. I made the goal of this iteration to
                make the product more user-friendly, intuitive, sequential, and reuseable.
              </p>
            </div>
            <div className={styles.center}>The result: </div>
            <div style={{marginBottom: "40px"}} className={styles.videoContainer}>
              <YoutubeEmbed embedId="NGBczqoGmMk" />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                We&apos;re now looking to get the product in the hands of a
                couple of clients, and we&apos;re on track to applying for the
                Summer batch of Y Combinator. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
