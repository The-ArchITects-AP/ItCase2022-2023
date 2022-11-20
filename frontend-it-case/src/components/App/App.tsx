import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../pages/HomePage/HomePage';
import ReportOverviewPage from '../../pages/ReportOverviewPage/ReportOverviewPage';
import ReportDetailPage from '../../pages/ReportDetailPage/ReportDetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Category, Data, IFrame } from '../../types';

const App = () => { 
  const [drupalContent, setDrupalContent] = useState<IFrame[]>();
  const [categoriesDrupal, setCategoriesDrupal] = useState<Category[]>();

  //getDrupalContent() haalt content (iFrames) op van locale Drupal Valerie in JSON-formaat

  useEffect(() => {
    getDrupalContent();
  }, []);

  const getDrupalContent = async () => {
    let response = await fetch('http://localhost:81/drupal/iframes');
    let result = await response.json();

    setDrupalContent(result as IFrame[]);
  }

  console.log(drupalContent);  

  //getDrupalCategories() haalt de categorieën (HomePage Tiles) op van locale Drupal Valerie in JSON-formaat

  useEffect(() => {
    getDrupalCategories();
  }, []);

  const getDrupalCategories = async () => {
    let response = await fetch('http://localhost:81/drupal/categories');
    let result = await response.json();

    setCategoriesDrupal(result as Category[]);
  }

  console.log(categoriesDrupal);  

  //getDrupalCategories() fetched onderstaande data (later hardcoded data verwijderen)

  const data: Data[] = [
    {
      id: "1",
      title: "HR",
      img: '/images/hr.jpg'
    },
    {
      id: "2",
      title: "Sales",
      img: '/images/sales.jpg'
    },
    {
      id: "3",
      title: "Engineering",
      img: '/images/engineering.jpg'
    }
  ] 

  if(!drupalContent) {
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>

        <Header />

        <Routes>

          <Route path='/report/:nid' element={<ReportDetailPage drupalContent={drupalContent}/>} />
          
          <Route path='/report' element={<ReportOverviewPage drupalContent={drupalContent}/>} />

          <Route path="/" element={<HomePage data={data} />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
