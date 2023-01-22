import styles from "./ReportDetailPage.module.css";
import { Link, useParams } from "react-router-dom";
import { IFrame, UserData } from "../../types";
import ForbiddenPage from "../ForbiddenPage/ForbiddenPage";

//Tijdelijke data voor CSS
//Drupal data niet zichtbaar op localhost

const reportsTemporary = [
  {
    nid: "14",
    field_report_category: "Engineering",
    title: "COVID",
    field_date: "2022-03-25",
    field_type_of_report: "Power Bi ",
    field_thumbnail: "",
    field_iframe: "https://app.powerbi.com/view?r=eyJrIjoiYjA1YzhhMjItMWU1ZS00YmRiLWI3MjUtZDVhN2ZlMzY4NjFlIiwidCI6IjJjOTJmZjI0LWI0MmMtNDgwZC1iNzRkLTY2ZmNlNzZiZDdkYSIsImMiOjl9"
    },
    {
    nid: "12",
    field_report_category: "Engineering",
    title: "COVID",
    field_date: "2022-03-25",
    field_type_of_report: "Power Bi ",
    field_thumbnail: "/sites/default/files/2022-12/Covid_Thumbnail_3.jpg",
    field_iframe: "https://app.powerbi.com/view?r=eyJrIjoiYjA1YzhhMjItMWU1ZS00YmRiLWI3MjUtZDVhN2ZlMzY4NjFlIiwidCI6IjJjOTJmZjI0LWI0MmMtNDgwZC1iNzRkLTY2ZmNlNzZiZDdkYSIsImMiOjl9"
    },
    {
    nid: "8",
    field_report_category: "Engineering",
    title: "The Rat Pack",
    field_date: "2022-03-25",
    field_type_of_report: "Tableau",
    field_thumbnail: "/sites/default/files/2022-12/RatPack_Thumbnail_1.jpg",
    field_iframe: "https://public.tableau.com/views/RunningWiththePack/RunningwiththePack?:showVizHome=no&:embed=true&:language=en-US&:display_count=n&:origin=viz_share_link&:auto_resize=yes"
    }
]

interface ReportProps {
  reports: IFrame[];
  userData?: UserData;
}

const ReportDetailPage = ({ reports, userData }: ReportProps) => {
  let { nid } = useParams();
  const toShow = reportsTemporary.find((item) => item.nid === nid);

  if (!toShow) {
    return <p>Loading...</p>;
  }

  console.log(toShow);

  // const checkRole =
  //   userData?.clientPrincipal.userRoles.includes(
  //     toShow.field_report_category.toLowerCase()
  //   ) || userData?.clientPrincipal.userRoles.includes("admin");

  const checkRole = true;

  if (checkRole) {
    return (
      <div>
        <div className={styles.back}>
          <Link to={`/report/${toShow.field_report_category}`}>Back</Link>
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
        <Link to={`/report/${toShow.field_report_category}`}>Back</Link>
      </div>
      <ForbiddenPage />
    </div>
  );
};

export default ReportDetailPage;
