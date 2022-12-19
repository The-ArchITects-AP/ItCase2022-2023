import styles from "./ReportDetailPage.module.css";
import { Link, useParams } from "react-router-dom";
import { IFrame, UserData } from "../../types";

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

  if (toShow) {
    /*const checkRole =
      userData?.clientPrincipal.userRoles.includes(
        toShow.field_report_category.toLowerCase()
      ) || userData?.clientPrincipal.userRoles.includes("admin");*/

    const checkRole = userData?.clientPrincipal.userRoles.includes("admin");

    if (checkRole) {
      return (
        <div>
          <div className={styles.back}>
            <Link to={`/report/${toShow.field_report_category}`}>Back</Link>
          </div>

          <div className={styles.reportContainer} key={toShow.nid}>
            <p className={styles.title}>{toShow.title}</p>
            <p>
              Id: {toShow.nid} | Category: {toShow.field_report_category} | Type
              of report: {toShow.field_type_of_report}
            </p>
            <iframe
              src={toShow.field_iframe}
              title="Report"
              width="1500"
              height="500"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>forbidden</div>{" "}
        <div className={styles.back}>
          <Link to={`/report/${toShow.field_report_category}`}>Back</Link>
        </div>
      </div>
    );
  }

  return <div>empty</div>;
};

export default ReportDetailPage;
