
import styles from './HomePage.module.css';
import Tile from '../Tile/Tile';


 //te vervangen door een mapping van een array van Tiles die gemapped wordt (en waar ge props aan doorgeeft)
      

const HomePage = () => {
    return (
      <div className={styles.HomePage}>
     
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />  
       
      </div>
    );
  }
  
  export default HomePage;
