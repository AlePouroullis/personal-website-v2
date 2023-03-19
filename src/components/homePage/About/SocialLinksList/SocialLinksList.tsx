import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLinksList.module.scss";
import Link from "next/link";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/",
    icon: faLinkedin,
  },
  {
    name: "github",
    href: "https://github.com/AlePouroullis",
    icon: faGithub,
  },
  {
    name: "email",
    href: "mailto:alexpouroullis123@gmail.com",
    icon: faEnvelope,
  },

  {
    name: "resume",
    href: "/resume.pdf",
    icon: faFile,
  },
];

export default function SocialLinksList() {
  return (
    <ul className={styles.socialLinksList}>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <a
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              href={link.href}
            >
              <FontAwesomeIcon icon={link.icon} className={styles.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
