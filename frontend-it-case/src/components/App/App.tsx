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
    let response = await fetch('https://drupal-thearchitects.westeurope.cloudapp.azure.com/reports');
    let result = await response.json();
    

    setReportsDrupal(result as IFrame[]);
  }

  //getDrupalCategories() haalt de categorieën (HomePage Tiles) op van locale Drupal in JSON-formaat

  useEffect(() => {
    getDrupalCategories();
  }, []);

  const getDrupalCategories = async () => {
    let response = await fetch('https://drupal-thearchitects.westeurope.cloudapp.azure.com/categories');
    let result = await response.json();
    console.log(result)

    setCategoriesDrupal(result as Category[]);
  }

  if (!reportsDrupal || !categoriesDrupal) {
    return <p className={styles.loadingApp}>Loading...</p>
  }

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>

        <Header />

        <Routes>

          <Route path='/report/detail/:nid' element={<ReportDetailPage reports={reportsDrupal} />} />

          <Route path='/report/:title' element={<ReportOverviewPage reports={reportsDrupal} />} />

          <Route path="/" element={<HomePage categories={categoriesDrupal} />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
