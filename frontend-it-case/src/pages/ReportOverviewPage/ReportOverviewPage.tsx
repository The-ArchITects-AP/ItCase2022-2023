import styles from './ReportOverviewPage.module.css';
import { IFrame } from '../../types';
import { Link, useParams } from 'react-router-dom';

interface ReportProps {
  reports: IFrame[]
}

const ReportOverviewPage = ({ reports }: ReportProps) => {

  let { title } = useParams();
  const toShow: IFrame[] = reports.filter((item) => item.field_categorie === title);

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
              <h3>{data.title}</h3>
              <p>ID: {data.nid}</p>
              <p>Category: {data.field_categorie}</p>
              <p>Date created: {data.field_date}</p>
              <iframe src={data.field_iframe} title="Report" width="500" height="350"></iframe>
            </Link>

          </div>
        })}
      </div>
    </div>
  );
}

export default ReportOverviewPage;