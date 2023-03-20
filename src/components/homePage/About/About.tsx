import Image from "next/image";
import styles from "./About.module.scss";
import SocialLinksList from "./SocialLinksList/SocialLinksList";

const imageDimensionsPx = { width: 250, height: 250 };

export default function About() {
  return (
    <div className={styles.about}>
      <a id="about" />
      <div>
        <div className={styles.bio}>
          <div className={styles.left}>
            <Image
              width={imageDimensionsPx.width}
              height={imageDimensionsPx.height}
              style={{
                width: imageDimensionsPx.width + "px",
                height: imageDimensionsPx.height + "px",
              }}
              className={styles.image}
              src="https://i.ibb.co/3Csst9c/close-up-smile-no-teeth.jpg"
              alt="me"
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.name}>
              Alexandros ‘Alé‘ Philippos Pouroullis
            </h2>
            <p className={styles.bioText}>
              Hi, I&apos;m Alé – a software engineer and machine learning
              enthusiast based in Cape Town, studying Computer Science and
              Applied Statistics at the University of Cape Town.
            </p>
            <SocialLinksList />
          </div>
        </div>
        <div className={styles.longBio}>
          <p>
            I&apos;m currently a second-year student living and studying in Cape
            Town, South Africa. I&apos;ve been spending most of my time over the
            last year and a half working towards personal and business
            endeavours outside of my usual commitments.
            <br />
            <br />I worked on several machine learning projects early last year.
            I later pivoted to software engineering work – mostly web
            development –, initially personal endeavours and later startups. My
            current work involves full-stack development for two startups: the
            first being{" "}
            <a
              href="https://www.linkedin.com/company/looptaxiapp"
              target="_blank"
              rel="noreferrer"
            >
              Loop
            </a>{" "}
            – a startup aiming to digitalize the minibus taxi industry in South
            Africa – and the second being Elevat3d – a B2B SaaS platform for
            mines that analyzes their blasting operations.
            <br />
            <br />
            These two projects required shouldering lots of responsibility
            which has accelerated my growth and understanding of the software
            development process. Beyond upskilling myself technically, I&apos;ve
            had to make plenty use of soft skills, like speaking with various
            stakeholders, supervising interns, and planning projects.
            <br />
            <br />I look for work that <em>a)</em> provides some meaningful
            impact, <em>b)</em> is interesting and has lots of opportunities for
            growth and learning, <em>c)</em> dynamic with lots of responsibility
            and autonomy, and <em>d)</em> has a great team to work with. So long
            as I&apos;m alive and kicking, I&apos;ll forever be on the look
            out for projects that meet these criteria to apply myself towards.
          </p>
        </div>
      </div>
    </div>
  );
}
