import styles from "./ReportOverviewPage.module.css";
import { IFrame, UserData } from "../../types";
import { Link, useParams } from "react-router-dom";
import ForbiddenPage from "../ForbiddenPage/ForbiddenPage";
import NoContentPage from "../NoContentPage/NoContentPage";

//Tijdelijke data voor CSS
//Drupal data niet zichtbaar op localhost

// const reportsTemporary = [
//   {
//     nid: "14",
//     field_report_category: "Engineering",
//     title: "COVID",
//     field_date: new Date("2022-03-25"),
//     field_type_of_report: "Power Bi ",
//     field_thumbnail: "/sites/default/files/2022-12/Covid_Thumbnail_4.jpg",
//     field_iframe: "https://app.powerbi.com/view?r=eyJrIjoiYjA1YzhhMjItMWU1ZS00YmRiLWI3MjUtZDVhN2ZlMzY4NjFlIiwidCI6IjJjOTJmZjI0LWI0MmMtNDgwZC1iNzRkLTY2ZmNlNzZiZDdkYSIsImMiOjl9"
//     },
//     {
//     nid: "13",
//     field_report_category: "Engineering",
//     title: "The Rat Pack",
//     field_date: new Date("2022-03-25"),
//     field_type_of_report: "Tableau",
//     field_thumbnail: "/sites/default/files/2022-12/RatPack_Thumbnail_2.jpg",
//     field_iframe: "https://public.tableau.com/views/RunningWiththePack/RunningwiththePack?:showVizHome=no&:embed=true&:language=en-US&:display_count=n&:origin=viz_share_link&:auto_resize=yes"
//     },
//     {
//     nid: "12",
//     field_report_category: "Engineering",
//     title: "COVID",
//     field_date: new Date("2022-03-25"),
//     field_type_of_report: "Power Bi ",
//     field_thumbnail: "/sites/default/files/2022-12/Covid_Thumbnail_3.jpg",
//     field_iframe: "https://app.powerbi.com/view?r=eyJrIjoiYjA1YzhhMjItMWU1ZS00YmRiLWI3MjUtZDVhN2ZlMzY4NjFlIiwidCI6IjJjOTJmZjI0LWI0MmMtNDgwZC1iNzRkLTY2ZmNlNzZiZDdkYSIsImMiOjl9"
//     },
//     {
//     nid: "8",
//     field_report_category: "Engineering",
//     title: "The Rat Pack",
//     field_date: new Date("2022-03-25"),
//     field_type_of_report: "Tableau",
//     field_thumbnail: "/sites/default/files/2022-12/RatPack_Thumbnail_1.jpg",
//     field_iframe: "https://public.tableau.com/views/RunningWiththePack/RunningwiththePack?:showVizHome=no&:embed=true&:language=en-US&:display_count=n&:origin=viz_share_link&:auto_resize=yes"
//     }
// ]

interface ReportProps {
  reports: IFrame[];
  userData?: UserData;
}

const ReportOverviewPage = ({ reports, userData }: ReportProps) => {
  let { title } = useParams();
  const toShow: IFrame[] = reports.filter(
    (item) => item.field_report_category === title
  );

  console.log(toShow);

  if (!toShow) {
    return <p>Loading...</p>;
  }

  if (toShow.length !== 0) {
    const checkRole =
      userData?.clientPrincipal.userRoles.includes(
        toShow[0].field_report_category.toLowerCase()
      ) || userData?.clientPrincipal.userRoles.includes("admin");

    // const checkRole = true;

    if (checkRole) {
      return (
        <div>
          <div className={styles.back}>
            <Link to="/">Back</Link>
          </div>

          <div className={styles.overviewPageContainer}>
            {toShow.map((data: IFrame) => {
              return (
                <div className={styles.reportContainer}>
                  <Link to={`/report/detail/${data.nid}`} key={data.nid}>
                    {/*
                      <img
                      src={`https://api.apiflash.com/v1/urltoimage?access_key=ad6f7c37ed5d4f3d9f42d09dcbcd4365&wait_until=page_loaded&url=${data.field_iframe}&delay=10`}
                      alt=""
                      width="500"
                      height="300"
                    />
                      */}
                    <img
                      src={`https://drupal-thearchitects.westeurope.cloudapp.azure.com${data.field_thumbnail}`}
                      alt={data.title}
                      width="500"
                      height="300"
                    />
                    <div className={styles.reportInfo}>
                      <div>
                        {data.field_type_of_report.toLowerCase() === "tableau" ?
                          <img className={styles.reportIcon} src="/Tableau.svg" alt="logo Tableau" /> :
                          <img className={styles.reportIcon} src="/PowerBI.png" alt="logo Power BI" />
                        }
                      </div>
                      <div className={styles.text}>
                        <p className={styles.title}>{data.title}</p>
                        <p>{data.field_type_of_report} | {data.field_report_category}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.back}>
          <Link to="/">Back</Link>
        </div>
        <ForbiddenPage />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.back}>
        <Link to="/">Back</Link>
      </div>
      <NoContentPage />
    </div>
  );

};

export default ReportOverviewPage;
