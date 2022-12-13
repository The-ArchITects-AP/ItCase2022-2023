import styles from "./HomePage.module.css";
import Tile from "../../components/Tile/Tile";
import { Link } from "react-router-dom";
import { Category } from "../../types";

interface CategoryProps {
  categories: Category[];
  roles: any;
}

const HomePage = ({ categories, roles }: CategoryProps) => {
  return (
    <div className={styles.homePageContainer}>
      <div>{roles}</div>

      {categories.map((data) => (
        <Link to={`/report/${data.title}`} key={data.nid}>
          <Tile category={data} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
