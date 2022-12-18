import styles from "./HomePage.module.css";
import Tile from "../../components/Tile/Tile";
import { Link } from "react-router-dom";
import { Category, UserData } from "../../types";

interface CategoryProps {
  categories: Category[];
  userData?: UserData;
}

const HomePage = ({ categories, userData }: CategoryProps) => {
  const handleLinkClick = (event: any, title: string) => {
    if (userData?.clientPrincipal.userRoles.includes(title)) {
      return event.currentTarget;
    }
    return console.log("forbidden");

    // 👇️ refers to the link element
    //console.log(event.currentTarget);
  };

  return (
    <div className={styles.homePageContainer}>
      {categories.map((data) => (
        <Link
          onClick={(event) => handleLinkClick(event, data.title)}
          to={`/report/${data.title}`}
          key={data.nid}
        >
          <Tile category={data} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
