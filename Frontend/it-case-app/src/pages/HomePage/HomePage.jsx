
import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';
import { Link } from 'react-router-dom'


const HomePage = ({ data }) => {
  return (
    <div className={styles.homePageContainer}>

      <div><p>{`Testwaarde: ${data[0].nid[0].value}`}</p></div>

    </div>
  );
}

export default HomePage;
