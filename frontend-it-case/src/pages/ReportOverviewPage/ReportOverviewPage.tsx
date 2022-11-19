import styles from './ReportOverviewPage.module.css';
import { IFrame } from '../../types';
import { Link } from 'react-router-dom';

interface DrupalContentProps {
  drupalContent: IFrame[]
}

const ReportOverviewPage = ({ drupalContent }: DrupalContentProps) => {

  return (
    <div className={styles.overviewPageContainer}>

      {!drupalContent ? (
        <div>loading...</div>
      ) : (
        <div>
          {drupalContent.map((data: IFrame) => {
            return <div key={data.title}>

              <Link to={`/report/${data.nid}`} key={data.nid}>
                <h3>{data.title}</h3>
                <p>ID: {data.nid}</p>
                <p>Category: {data.field_categorie}</p>
                <p>Date created: {data.field_date}</p>
                <iframe src={data.field_iframe} title="Report" width="1140" height="540"></iframe>
              </Link>

            </div>
          })}
        </div>
      )}
    </div>
  );
}

export default ReportOverviewPage;