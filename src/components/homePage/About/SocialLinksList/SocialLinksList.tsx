import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./SocialLinksList.module.scss";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/",
    icon: LinkedInIcon,
  },
  {
    name: "github",
    href: "https://github.com/AlePouroullis",
    icon: GitHubIcon,
  },
  {
    name: "email",
    href: "mailto:alexpouroullis123@gmail.com",
    icon: AlternateEmailIcon,
  },

  {
    name: "resume",
    href: "/resume.pdf",
    icon: AttachFileIcon,
  },
];

export default function SocialLinksList() {
  return (
    <ul className={styles.socialLinksList}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.name}>
            <a
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              href={link.href}
            >
              <Icon className={styles.icon}/>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
