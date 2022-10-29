import styles from './App.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
