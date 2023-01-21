import styles from "./ReportOverviewPage.module.css";
import { IFrame, UserData } from "../../types";
import { Link, useParams } from "react-router-dom";
import ForbiddenPage from "../ForbiddenPage/ForbiddenPage";
import NoContentPage from "../NoContentPage/NoContentPage";

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
                    <div className={styles.info}>
                      <div>
                        {data.field_type_of_report.toLowerCase() === "tableau" ?
                          <img src="/TableauLogo.png" alt="logo Tableau" /> :
                          <img src="/PowerBILogo.png" alt="logo Power BI" />
                        }
                      </div>
                      <div>
                        <p className={styles.title}>
                          {data.title} | {data.field_type_of_report}
                        </p>
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
