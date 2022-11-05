
import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';
import { Link } from 'react-router-dom'


const HomePage = ({ data }) => {
  return (
    <div className={styles.homePageContainer}>

      {data.map((element) =>

        <Link to={`/detail/${element.id}`} key={element.id}>
          <Tile  title={element.title} id={element.id} iframe={element.iframe} />
        </Link>

      )}


    </div>
  );
}

export default HomePage;
