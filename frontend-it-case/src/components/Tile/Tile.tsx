import { Category, Data } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    category: Category
}

const Tile = ({ category }: DataProps) => {

    return (
        <div className={styles.tileStyle}>           
            <p className={styles.text}>{category.title}</p>    
            <img src={`https://drupal-thearchitects.westeurope.cloudapp.azure.com${category.field_category_image}`} alt={category.title} width="500" height="250" />
        </div>
    );
}

export default Tile;