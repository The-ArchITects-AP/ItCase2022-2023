import styles from './ReportDetailPage.module.css';
import { useParams } from "react-router-dom"
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
        <div className={styles.detailPageContainer}>
            <div key={toShow.title}>
                <h3>{toShow.title}</h3>
                <p>ID: {toShow.nid}</p>
                <p>Category: {toShow.field_categorie}</p>
                <p>Date created: {toShow.field_date}</p>
                <iframe src={toShow.field_iframe} title="Report" width="1140" height="540"></iframe>
            </div>
        </div>
    );
}

export default ReportDetailPage;