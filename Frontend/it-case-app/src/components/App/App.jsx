import styles from './App.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from '../../pages/HomePage/HomePage';
import DetailPage from '../../pages/DetailPage/DetailPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';  //v6 geinstalleerd =/= v5 
//import React, { useEffect, useState } from 'react';

const App = () => {
  // const [drupalContent, setDrupalContent] = useState();

  // //getDrupalContent() haalt content (inclusief iFrames) op van locale Drupal Valerie in JSON-formaat

  // useEffect(() => {
  //   getDrupalContent();
  // }, []);

  // const getDrupalContent = async () => {
  //   let response = await fetch('http://localhost:81/drupal/node/1?_format=json', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   });
  //   let json = await response.json();

  //   setDrupalContent(json);

  //   console.log(drupalContent);
  // }

  let data = [
    {
      id: 1,
      title: "HR",
      iframe: "www1",
      img:'/images/hr.jpg'

    },
    {
      id: 2,
      title: "Sales",
      iframe: "www2",
      img:'/images/sales.jpg'
    },
    {
      id: 3,
      title: "Engineering",
      iframe: "www3",
      img:'/images/engineering.jpg'
    }
  ]

  return (

    <BrowserRouter>
      <div className={styles.appContainer}>

        <Header />

        <Routes>

          <Route path='/detail/:id' element={<DetailPage data={data} />} />

          <Route path='/' exact element={ <HomePage data={data} />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
