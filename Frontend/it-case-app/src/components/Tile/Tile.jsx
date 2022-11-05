import styles from './Tile.module.css';

const Tile = ({id, titel, iframe}) => {
    return (
        <div className={styles.tileStyle}>

            <p>{titel}</p>
            <p>met ID {id} en url: {iframe} </p>
                
           
        </div>
    );
}

export default Tile;