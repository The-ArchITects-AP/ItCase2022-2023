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

  const checkRole =
    userData?.clientPrincipal.userRoles.includes(
      toShow[0].field_report_category.toLowerCase()
    ) || userData?.clientPrincipal.userRoles.includes("admin");

  if (checkRole) {
    if (toShow.length !== 0) {
      return (
        <div>
          <div className={styles.back}>
            <Link to="/">{`[ back ]`}</Link>
          </div>
          <div className={styles.overviewPageContainer}>
            {toShow.map((data: IFrame) => {
              return (
                <div className={styles.reportContainer}>
                  <Link to={`/report/detail/${data.nid}`} key={data.nid}>
                    {/*
                    //UNCOMMENT FOR USE OF SCREENSHOT PLUGIN
                      <img
                      className={styles.reportImage}
                      src={`https://api.apiflash.com/v1/urltoimage?access_key=ad6f7c37ed5d4f3d9f42d09dcbcd4365&wait_until=page_loaded&url=${data.field_iframe}&delay=10`}
                      alt=""
                    />
                      */}
                    <img
                      className={styles.reportImage}
                      src={`https://drupal.the-architects.online${data.field_thumbnail}`}
                      alt={data.title}
                    />
                    <div className={styles.reportInfo}>
                      <div>
                        {data.field_type_of_report.toLowerCase().trim() ===
                        "tableau" ? (
                          <img
                            className={styles.reportIcon}
                            src="/Tableau.svg"
                            alt="Tableau icon"
                          />
                        ) : data.field_type_of_report.toLowerCase().trim() ===
                          "power bi" ? (
                          <img
                            className={styles.reportIcon}
                            src="/PowerBI.png"
                            alt="Power BI icon"
                          />
                        ) : (
                          <img
                            className={styles.reportIcon}
                            src="/DefaultIcon.png"
                            alt="Default icon"
                          />
                        )}
                      </div>
                      <div className={styles.text}>
                        <p className={styles.title}>{data.title}</p>
                        <p>Added on: {data.field_date}</p>
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
          <Link to="/">{`[ back ]`}</Link>
        </div>
        <NoContentPage />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.back}>
        <Link to="/">{`[ back ]`}</Link>
      </div>
      <ForbiddenPage />
    </div>
  );
};

export default ReportOverviewPage;
