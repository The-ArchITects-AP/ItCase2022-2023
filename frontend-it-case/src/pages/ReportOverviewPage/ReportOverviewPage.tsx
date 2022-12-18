import styles from "./ReportOverviewPage.module.css";
import { IFrame, UserData } from "../../types";
import { Link, useParams } from "react-router-dom";

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

  const checkRole = userData?.clientPrincipal.userRoles.includes(
    toShow[0].field_report_category.toLowerCase()
  );

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
                  <p className={styles.title}>
                    {data.title} | {data.field_type_of_report}
                  </p>
                  <img
                    src={`https://api.apiflash.com/v1/urltoimage?access_key=ad6f7c37ed5d4f3d9f42d09dcbcd4365&wait_until=page_loaded&url=${data.field_iframe}&delay=10`}
                    alt=""
                    width="500"
                    height="300"
                  />
                  <img
                    src={`https://drupal-thearchitects.westeurope.cloudapp.azure.com${data.field_thumbnail}`}
                    alt={data.title}
                    width="500"
                    height="300"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>forbidden</div>;
};

export default ReportOverviewPage;
