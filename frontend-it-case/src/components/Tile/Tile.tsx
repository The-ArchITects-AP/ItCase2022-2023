import { Category } from '../../types';
import styles from './Tile.module.css';

interface DataProps {
    category: Category
}

const Tile = ({ category }: DataProps) => {

    return (
        <div className={styles.tileContainer}>
            <img className={styles.tileImage} src={`https://drupal.the-architects.online${category.field_category_image}`} alt={category.title} />
            <div className={styles.tileOverlay}>
                <div className={styles.tileHeader}>
                    <p>{category.title}</p>
                </div>
                <p className={styles.tileDescription}>View {category.title.toLowerCase()} reports</p>
            </div>
        </div>
    );
}

export default Tile;