
import styles from './HomePage.module.css';
import Tile from '../Tile/Tile';


 //te vervangen door een mapping van een array van Tiles t (en waar ge props aan doorgeeft, titel iframe url)
      

const HomePage = () => {
    return (
      <div className={styles.homePageContainer}>
     
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />  
       
      </div>
    );
  }
  
  export default HomePage;
