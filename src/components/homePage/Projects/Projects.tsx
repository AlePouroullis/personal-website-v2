import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.introduction}>
        When I have the time to spare, I like to work on machine
        learning-related and software projects that make use of my skills in
        some meaningful way.
      </p>
      <div className={styles.projectCardsWrapper}>
        <ProjectCard
          imageUrl={"/images/project-images/spectrogram-waveform.png"}
          title="Speech Emotion Recognition"
          subheading="Loop Q Prize 2022 Challenge A"
          imageAlt="spectrogram"
          renderDialogContent={() => {
            return (
              <div className={styles.dialogContent}>
                <div className={styles.dialogHeader}>
                  <h3>Speech Emotion Recognition</h3>
                </div>
                <p className={styles.dialogText}>
                  This challenge involved classifying the emotion conveyed in speech from
                  a short audio clip.
                  <br />
                  <br /> The main challenge was working with audio data, which
                  required some understanding of digital signal processing,
                  spectrograms, the fourier transform, and more. I read many
                  research papers on digital signal processing, how to process audio data, the ideal algorithm for such a
                  problem, data augmentation techniques for audio, etc. I
                  ultimately processed the data in two different ways: the one
                  involved converting audio into spectrograms, more specifically
                  mel-spectrograms, – which I called spectro-temporal features – and the other involved using derived
                  features, like average pitch, and others – static features. In the former case,
                  I used a CNN to analyze the spectrograms; in the latter, I
                  used regular neural networks.
                  <br />
                  <br /> I placed 5th and was offered a contractual position at
                  Loop Q to research natural language generation. I
                  unfortunately had to decline due to other commitments.
                </p>
                <div className={styles.dialogLinksWrapper}>
                  <p>
                    You can find all the work I did – the notebooks, paper, and
                    final model – for the project on{" "}
                    <a
                      className={styles.link}
                      href="https://github.com/AlePouroullis/LoopQPrize/tree/main/Challenge%20A"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            );
          }}
        />
        <ProjectCard
          title="Crop yield prediction"
          subheading="Loop Q Prize 2022 Challenge B"
          imageUrl={"/images/project-images/crops.jpeg"}
          imageAlt="crops"
          renderDialogContent={() => {
            return (
              <div className={styles.dialogContent}>
                <div className={styles.dialogHeader}>
                  <h3>Crop Yield Prediction</h3>
                </div>

                <p className={styles.dialogText}>
                  This was the second, easier challenge, part of the Loop Q
                  Prize 2022 competition.
                  <br />
                  <br /> This challenge involved creating a model that could
                  predict crop yield given some set of features. The main
                  learnings from this were some simple data processing
                  techniques, like one-hot encoding, advanced plotting, and solidifying concepts I had picked up from former projects; but
                  other than that, it was a mostly straight-forward task.
                  <br />
                  <br /> I completed this challenge to ensure I had something to
                  submit, but I ended up completing and submitting Challenge A
                  instead.
                </p>
                <div className={styles.dialogLinksWrapper}>
                  <a
                    className={styles.link}
                    href="https://github.com/AlePouroullis/LoopQPrize/tree/main/Challenge%20B"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github link
                  </a>
                </div>
              </div>
            );
          }}
        />
        <ProjectCard
          title="Type Ia Supernova classification"
          subheading="Google Summer of Code Evaluative Task"
          imageUrl={"/images/project-images/supernova-graphs.png"}
          imageAlt="Supernova graphs"
          renderDialogContent={() => {
            return (
              <div className={styles.dialogContent}>
                <div className={styles.dialogHeader}>
                  <h3>Type Ia Supernova Classification</h3>
                </div>
                <p className={styles.dialogText}>
                  After stumbling on some intriguing project ideas hosted by the
                  Machine Learning 4 Science organization as part of the Google
                  Summer of Code programme, I decided to apply. As part of the
                  application, I had to submit an evaluative task that roughly
                  resembled the project that I would actually work on if I were
                  accepted. <br />
                  <br />
                  Since my early teens, I developed a keen interest for nuclear
                  physics, which, in turn, led to an interest in astrophyics. So
                  this project was particularly enticing to me
                  because it was at the intersection of two interests of mine.{" "}
                  <br />
                  <br />
                  The project involved inferring the physical characteristics of
                  the progenitor system (the star system that caused the
                  supernova) of a type Ia supernova (a particular class of
                  supernovae) from its observable parameters. It was the first of the machine learning projects I would work on, so it was attempted primarily with the intention of learning the basics of machine learning.
                  <br />
                  <br />
                  I wasn&apos;t accepted into the programme, but it sparked a spell of interest in machine learning that led to many other projects.
                </p>
                <div className={styles.dialogLinksWrapper}>
                  <a
                    className={styles.link}
                    href="https://github.com/AlePouroullis/Thermonuclear-Supernova-Classification-Student-Evaluation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github link
                  </a>
                </div>
              </div>
            );
          }}
        />
        <ProjectCard
          title="CampusConnect"
          subheading="Student Marketplace Platform"
          imageUrl={"/images/project-images/UCT_Jammie_Plaza.jpeg"}
          imageAlt="University campus plaza"
          renderDialogContent={() => {
            return (
              <div className={styles.dialogContent}>
                <div className={styles.dialogHeader}>
                  <h3>CampusConnect</h3>
                </div>
                <p className={styles.dialogText}>
                  This was a project I&apos;ve intended working on since first
                  arriving at university. There was an obvious need for a
                  centralized platform for students selling old textbooks
                  and other items, finding accommodation and roommates,
                  requesting items, offering services, etc., while keeping it
                  exclusive to students.
                  <br />
                  <br />I struggled to find time to work on it with all the
                  other work I had going on, but managed to find a gap during
                  the end-of-year break in 2022. The other reason I chose ot
                  work on it was to gain experience using Java with Spring for
                  building backends, seeing that enterprise-level applications
                  tend to favour it, with its stability and maturity. <br />
                  <br />
                  The project is currently in progress, with the frontend being
                  built in NextJs, and the backend being built in Java with
                  Spring. My plan is to get other students involved to make it a
                  community-driven project, instead of another solo project, which has become rather dull for me.
                </p>
                <div className={styles.dialogLinksWrapper}>
                  <a
                    className={styles.link}
                    href="https://github.com/AlePouroullis/marketplace"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github link to Frontend
                  </a>
                  <a
                    className={styles.link}
                    href="https://github.com/AlePouroullis/marketplace-api"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github link to API
                  </a>
                </div>
              </div>
            );
          }}
        />
        <ProjectCard
          title="Machine Learning from First Principles"
          subheading="Coursera specialization by Imperial College London"
          imageUrl={"/images/project-images/neural-network.webp"}
          imageAlt="Neural network"
          renderDialogContent={() => {
            return (
              <div className={styles.dialogContent}>
                <div className={styles.dialogHeader}>
                  <h3>Machine Learning from First Principles</h3>
                </div>
                <p className={styles.dialogText}>
                  Immediately after completing a bout of many machine learning
                  projects, I decided to take a step back and learn the
                  fundamentals of the domain to have greater control over and
                  understanding of the work I was doing. I completed 2 courses – linear
                  algebra and multivariable calculus for machine learning –
                  conducted by the{" "}
                  <a
                    href="https://www.coursera.org/specializations/mathematics-machine-learning"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Imperial College London on Coursera
                  </a>
                  . <br />
                  <br />
                  After completing the course, I started building neural
                  networks from scratch, beginning with a single-neuron network,
                  then working my way up towards a multilayer perceptron for
                  digit recognition.
                  <br />
                  <br />I thoroughly enjoyed the deep and comprehensive
                  understanding I had gained from these projects. I later
                  approached a professor at the University of Cape Town to look
                  for research to conduct with my new-found skill set. I was
                  proposed a project on evaluating layer-specific learning
                  rates, but just as I was about to take it on, I got involved
                  with Elevat3d, the startup I&apos;ve been working with since, and unfortunately had to discontinue the machine learning research I was doing.
                </p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
