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
  const [reportsDrupal, setReportsDrupal] = useState<IFrame[]>();
  const [categoriesDrupal, setCategoriesDrupal] = useState<Category[]>();

  //getDrupalReports() haalt rapporten (iFrames) op van locale Drupal in JSON-formaat

  useEffect(() => {
    getDrupalReports();
  }, []);

  const getDrupalReports = async () => {
    let response = await fetch('http://localhost:81/drupal/iframes');
    let result = await response.json();

    setReportsDrupal(result as IFrame[]);
  }

  console.log(reportsDrupal);  

  //getDrupalCategories() haalt de categorieën (HomePage Tiles) op van locale Drupal in JSON-formaat

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

  if(!reportsDrupal || !categoriesDrupal) {
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>

        <Header />

        <Routes>

          <Route path='/report/detail/:nid' element={<ReportDetailPage reports={reportsDrupal}/>} />
          
          <Route path='/report/:title' element={<ReportOverviewPage reports={reportsDrupal}/>} />

          <Route path="/" element={<HomePage categories={categoriesDrupal} />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
