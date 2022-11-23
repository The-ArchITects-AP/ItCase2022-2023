import { Category, Data } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    category: Category
}

const Tile = ({ category }: DataProps) => {

    return (
        <div className={styles.tileStyle}>               
            <img src={`http://drupal-thearchitects.westeurope.cloudapp.azure.com${category.field_category_image}`} alt={category.title} width="500" height="300" />
            <p className={styles.text}>{category.title}</p>
        </div>
    );
}

export default Tile;