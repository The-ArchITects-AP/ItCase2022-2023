import styles from './ReportOverviewPage.module.css';
import { Data, IFrame } from '../../types';
import { Link, useParams } from 'react-router-dom';

interface DrupalContentProps {
  drupalContent: IFrame[]
}

const ReportOverviewPage = ({ drupalContent }: DrupalContentProps) => {

  // let { title } = useParams();
  // const toShow : IFrame[] = drupalContent.filter((item) => item.field_categorie === title);

  // console.log(toShow);

  // if (!toShow) {
  //   return <p>Loading...</p>
  // }

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