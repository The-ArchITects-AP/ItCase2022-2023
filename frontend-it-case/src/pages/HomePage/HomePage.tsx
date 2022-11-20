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

      {data.map((data) =>
      
        <Link to={`/report/`} key={data.id}>
          <Tile data={data} />
        </Link>

      )}

    </div>
  );
}

export default HomePage;