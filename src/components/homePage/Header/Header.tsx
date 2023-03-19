import styles from "./Header.module.scss";
import { useState } from "react";
import { Link } from "react-scroll";

const links = [
  {
    name: "about",
    href: "about",
  },
  { name: "work", href: "work" },
  {
    name: "projects",
    href: "projects",
  },
];

const commonProps = {
  duration: 400,
  smooth: true,
  className: styles.link,
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.heading}>alé pouroullis</h1>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.navLinksList}>
          {links.map((link) => {
            return (
              <li className={styles.linkWrapper} key={link.name}>
                <Link {...commonProps} to={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.navLinksListMobile}>
          <div
            className={`${styles.burger} ${mobileMenuOpen ? styles.open : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
          <div
            className={`${styles.mobileMenu} ${
              mobileMenuOpen ? styles.open : ""
            }`}
          >
            <ul className={styles.navList}>
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      {...commonProps}
                      to={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
