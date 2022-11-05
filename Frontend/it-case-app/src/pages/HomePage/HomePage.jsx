
import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';
      

const HomePage = ({data}) => {
    return (
      <div className={styles.homePageContainer}>
     
        { data.map((element) => 

        <Tile title={element.title} id={element.id} iframe={element.iframe} />

        )}

       
      </div>
    );
  }
  
  export default HomePage;
