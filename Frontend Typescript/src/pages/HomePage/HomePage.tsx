import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';
import { Link } from 'react-router-dom'
import { Data } from '../../types';

interface DataProps {
  data: Data[]
}

const HomePage = ({ data }: DataProps) => {

  return (
    <div className={styles.homePageContainer}>

      {data.map((element) =>
      
        <Link to={`/report`} key={element.id}>
          <Tile data={element} />
        </Link>

      )}

    </div>
  );
}

export default HomePage;