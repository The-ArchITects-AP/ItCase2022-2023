import styles from './App.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from '../../pages/HomePage/HomePage';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
