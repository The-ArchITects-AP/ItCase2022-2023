import { UserData } from "../../types";
import styles from "./Header.module.css";

interface HeaderProps {
  userData?: UserData;
}

const Header = ({ userData }: HeaderProps) => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/LogoTheArchitects.png" alt="Logo The ArchITects" />
        </a>
      </div>
      <div className={styles.userContainer}>
        <p>Welcome, {userData?.clientPrincipal.userDetails}</p>
        <a href="/logout">Log out</a>
      </div>
    </div>
  );
};

export default Header;
