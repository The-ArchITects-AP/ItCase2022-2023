import styles from './DetailPage.module.css';
import { IFrame } from '../../types';

interface DrupalContentProps {
    drupalContent: IFrame[]
  }

const Detail = ({drupalContent}: DrupalContentProps) => {

    return (
        <div className={styles.detailPageContainer}>
    
          {!drupalContent ? (
            <div>loading...</div>
          ) : (
            <div>
              {drupalContent.map((data: IFrame) => {
                return <div key={data.title}>
                  <h3>{data.title}</h3>
                  <p>ID: {data.nid}</p>
                  <p>Category: {data.field_categorie}</p>
                  <p>Date created: {data.field_date}</p>
                  <iframe src={data.field_iframe} title="Report" width="1140" height="540"></iframe>
                </div>
              })}
            </div>
          )}
        </div>
      );
}

export default Detail;