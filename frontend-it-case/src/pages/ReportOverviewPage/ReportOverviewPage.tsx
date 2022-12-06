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
              <p className={styles.title}>{data.title} | {data.field_type_of_report}</p> 
              <img src={`https://drupal-thearchitects.westeurope.cloudapp.azure.com${data.field_thumbnail}`} alt={data.title} width="500" height="300" />
            </Link>

          </div>
        })}
      </div>
    </div>
  );
}

export default ReportOverviewPage;