import Header from "../homePage/Header/Header";
import Footer from "../homePage/Footer/Footer";
import styles from "./Layout.module.scss";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
