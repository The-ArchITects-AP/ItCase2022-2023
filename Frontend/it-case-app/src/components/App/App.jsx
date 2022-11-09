import styles from './App.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from '../../pages/HomePage/HomePage';
import DetailPage from '../../pages/DetailPage/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  //v6 geinstalleerd =/= v5 
import React, { useEffect, useState } from 'react';

const App = () => {

  //getDrupalContent() haalt content (inclusief iFrames) op van locale Drupal Valerie in JSON-formaat

  //const [drupalContent, setDrupalContent] = useState([]);   initiele waarde [] of  {} is vereist (kan niet undefined zijn!)

  // useEffect(() => {
  //   getDrupalContent();
  // }, []);

  // const getDrupalContent = async () => {
  //   let response = await fetch('drupalapi');
  //   let result = await response.json();

  //   setDrupalContent(result);
  // }

  let drupalContent = [
    {
      id: 1,
      title: "HR",
      iframe: "www1",
      img: '/images/hr.jpg'

    },
    {
      id: 2,
      title: "Sales",
      iframe: "www2",
      img: '/images/sales.jpg'
    },
    {
      id: 3,
      title: "Engineering",
      iframe: "www3",
      img: '/images/engineering.jpg'
    }
  ] 
  

  return (

    <BrowserRouter>
      <div className={styles.appContainer}>

        <Header />

        <Routes>

          <Route path='/detail/:id' element={<DetailPage data={drupalContent} />} />

          <Route path='/' exact element={<HomePage data={drupalContent} />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;