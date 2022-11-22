import { Category, Data } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    category: Category
}

const Tile = ({ category }: DataProps) => {

    return (
        <div className={styles.tileStyle}>               
            <img src={`http://localhost:81/${category.field_img}`} alt={category.title} width="500" height="300" />
            <p className={styles.text}>{category.title}</p>
        </div>
    );
}

export default Tile;