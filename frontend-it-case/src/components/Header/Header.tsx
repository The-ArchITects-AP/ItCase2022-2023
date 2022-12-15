import { useEffect, useState } from "react";
import { UserData } from "../../types";
import styles from "./Header.module.css";

const Header = () => {
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(
      "https://kind-sea-00d89a703-1.westeurope.2.azurestaticapps.net/.auth/me"
    );
    let result = await response.json();
    console.log(result);

    setUserData(result as UserData);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/LogoTheArchitects.png" alt="Logo The ArchITects" />
        </a>
        <p>Welcome, {userData?.clientPrincipal.userDetails}</p>
        <a href="/logout">Log out</a>
      </div>
    </div>
  );
};

export default Header;
