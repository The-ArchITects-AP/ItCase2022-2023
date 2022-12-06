import styles from './ReportOverviewPage.module.css';
import { IFrame } from '../../types';
import { Link, useParams } from 'react-router-dom';

interface ReportProps {
  reports: IFrame[]
}

const ReportOverviewPage = ({ reports }: ReportProps) => {

  let { title } = useParams();
  const toShow: IFrame[] = reports.filter((item) => item.field_report_category === title);

  console.log(toShow);

  if (!toShow) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className={styles.back}><Link to="/">Back</Link></div>      

      <div className={styles.overviewPageContainer}>

        {toShow.map((data: IFrame) => {
          return <div className={styles.reportContainer}>

            <Link to={`/report/detail/${data.nid}`} key={data.nid}>
              <p className={styles.title}>{data.title}</p>
              <p>Category: {data.field_report_category} | Type of report: {data.field_type_of_report}</p>              
              <iframe src={data.field_iframe} title="Report" width="500" height="350" allowFullScreen={true}></iframe>
            </Link>

          </div>
        })}
      </div>
    </div>
  );
}

export default ReportOverviewPage;