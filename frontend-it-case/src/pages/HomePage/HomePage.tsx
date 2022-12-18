import styles from "./HomePage.module.css";
import Tile from "../../components/Tile/Tile";
import { Link } from "react-router-dom";
import { Category } from "../../types";

interface CategoryProps {
  categories: Category[];
}

const HomePage = ({ categories }: CategoryProps) => {
  return (
    <div className={styles.homePageContainer}>
      {categories.map((data) => (
        <Link to={`/report/${data.title}`} key={data.nid}>
          <Tile category={data} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
