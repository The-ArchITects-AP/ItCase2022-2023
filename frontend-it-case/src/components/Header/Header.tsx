import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/LogoTheArchitects.png" alt="Logo The ArchITects" />
        </a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
