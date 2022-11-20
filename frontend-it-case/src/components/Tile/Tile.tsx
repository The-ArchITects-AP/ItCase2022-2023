import { Category, Data } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    category: Category
}

const Tile = ({ category }: DataProps) => {
    
    return (
        <div className={styles.tileStyle}>          
             <p>{category.title}</p>
            <p>met ID {category.nid}</p>   
        </div>
    );
}

export default Tile;