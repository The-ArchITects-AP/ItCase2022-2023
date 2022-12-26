import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import ReportOverviewPage from "../../pages/ReportOverviewPage/ReportOverviewPage";
import ReportDetailPage from "../../pages/ReportDetailPage/ReportDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category, IFrame, UserData } from "../../types";

const App = () => {
  const [userData, setUserData] = useState<UserData>();
  const [reportsDrupal, setReportsDrupal] = useState<IFrame[]>();
  const [categoriesDrupal, setCategoriesDrupal] = useState<Category[]>();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch("/.auth/me");
    let result = await response.json();
    console.log(result);

    setUserData(result as UserData);
  };

  useEffect(() => {
    getDrupalReports();
  }, []);

  const getDrupalReports = async () => {
    let response = await fetch("https://drupal.the-architects.online/reports");
    let result = await response.json();

    setReportsDrupal(result as IFrame[]);
  };

  useEffect(() => {
    getDrupalCategories();
  }, []);

  const getDrupalCategories = async () => {
    let response = await fetch(
      "https://drupal.the-architects.online/categories"
    );
    let result = await response.json();
    console.log(result);

    setCategoriesDrupal(result as Category[]);
  };

  if (!reportsDrupal || !categoriesDrupal) {
    return <p className={styles.loadingApp}>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Header userData={userData} />

        <Routes>
          <Route
            path="/report/detail/:nid"
            element={
              <ReportDetailPage reports={reportsDrupal} userData={userData} />
            }
          />

          <Route
            path="/report/:title"
            element={
              <ReportOverviewPage reports={reportsDrupal} userData={userData} />
            }
          />

          <Route
            path="/"
            element={<HomePage categories={categoriesDrupal} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
