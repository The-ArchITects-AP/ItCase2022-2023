import styles from './ReportDetailPage.module.css';
import { Link, useParams } from "react-router-dom"
import { IFrame } from '../../types';

interface ReportProps {
    reports: IFrame[]
}

const ReportDetailPage = ({ reports }: ReportProps) => {

    let { nid } = useParams();
    const toShow = reports.find((item) => item.nid === nid);

    if (!toShow) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className={styles.back}><Link to={`/report/${toShow.field_report_category}`}>Back</Link></div> 

            <div className={styles.detailPageContainer} key={toShow.nid}>
                <div className={styles.reportContainer} key={toShow.title}>
                    <h3>{toShow.title}</h3>
                    <p>ID: {toShow.nid} - Category: {toShow.field_report_category} - Date created: {toShow.field_date}</p>
                    <iframe src={toShow.field_iframe} title="Report" width="1140" height="540"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ReportDetailPage;