import styles from './Tile.module.css';

const Tile = ({id, title, iframe, img}) => {
    return (

        <div className={styles.tileStyle}>

            <p>{title}</p>
            <p>met ID {id} en url: {iframe} </p>   

        </div>
    );
}

export default Tile;