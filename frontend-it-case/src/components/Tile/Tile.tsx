import { Data } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    data: Data
}

const Tile = ({ data }: DataProps) => {
    
    return (
        <div className={styles.tileStyle}>          
             <p>{data.title}</p>
            <p>met ID {data.id}</p>   
        </div>
    );
}

export default Tile;