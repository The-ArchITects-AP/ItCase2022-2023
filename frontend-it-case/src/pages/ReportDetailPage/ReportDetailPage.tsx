import styles from "./ReportDetailPage.module.css";
import { Link, useParams } from "react-router-dom";
import { IFrame, UserData } from "../../types";
import ForbiddenPage from "../ForbiddenPage/ForbiddenPage";

interface ReportProps {
  reports: IFrame[];
  userData?: UserData;
}

const ReportDetailPage = ({ reports, userData }: ReportProps) => {
  let { nid } = useParams();
  const toShow = reports.find((item) => item.nid === nid);

  if (!toShow) {
    return <p>Loading...</p>;
  }

  console.log(toShow);

  const checkRole =
    userData?.clientPrincipal.userRoles.includes(
      toShow.field_report_category.toLowerCase()
    ) || userData?.clientPrincipal.userRoles.includes("admin");

  if (checkRole) {
    return (
      <div>
        <div className={styles.back}>
          <Link to={`/report/${toShow.field_report_category}`}>{`[ back ]`}</Link>
        </div>

        <div className={styles.reportContainer} key={toShow.nid}>
          <p className={styles.title}>{toShow.title}</p>
          <p className={styles.text}>Added on: {toShow.field_date} | {toShow.field_report_category} | {toShow.field_type_of_report}</p>
          <iframe
            className={styles.iframe}
            src={toShow.field_iframe}
            title="Report"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div>      
      <div className={styles.back}>
        <Link to={`/report/${toShow.field_report_category}`}>{`[ back ]`}</Link>
      </div>
      <ForbiddenPage />
    </div>
  );
};

export default ReportDetailPage;
