import styles from './Footer.module.css';

const Footer = () => {
    const date = new Date();
    var year = date.getFullYear();

    return (
        <div className={styles.footerContainer}>
            <p>&copy; {year} The ArchITects | info@the-architects.be</p>
        </div>
    );
}

export default Footer;