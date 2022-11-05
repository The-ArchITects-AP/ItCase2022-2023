
import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';


 //te vervangen door een mapping van een array van Tiles t (en waar ge props aan doorgeeft, titel iframe url)
      

const HomePage = ({data}) => {
    return (
      <div className={styles.homePageContainer}>
     
        { data.map((element) => 

        <Tile titel={element.title} id={element.id} iframe={element.iframe} />

        )}

       
      </div>
    );
  }
  
  export default HomePage;
