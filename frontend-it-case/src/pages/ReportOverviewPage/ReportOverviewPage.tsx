import styles from './ReportOverviewPage.module.css';
import { IFrame } from '../../types';
import { Link } from 'react-router-dom';

interface DrupalContentProps {
  drupalContent: IFrame[]
}

const ReportOverviewPage = ({ drupalContent }: DrupalContentProps) => {

  return (
    <div >      
      {!drupalContent ? (
        <div>loading...</div>
      ) : (
        <div className={styles.overviewPageContainer}>
          {drupalContent.map((data: IFrame) => {
            return <div className={styles.reportContainer}> 

              <Link to={`/report/${data.nid}`} key={data.nid}>
                <h3>{data.title}</h3>
                <p>ID: {data.nid}</p>
                <p>Category: {data.field_categorie}</p>
                <p>Date created: {data.field_date}</p>
                <iframe src={data.field_iframe} title="Report" width="540" height="350"></iframe>
              </Link>

            </div>
          })}
        </div>
      )}
    </div>
  );
}

export default ReportOverviewPage;