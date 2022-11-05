import styles from './DetailPage.module.css';
import { useParams } from "react-router-dom"

const Detail = ({data}) => {

    let {id} = useParams();
    const toShow = data.find((item) => item.id === parseInt(id))

    return (
        <div className={styles.detailPageContainer}>


            <div className={styles.dashboardContainer}>

                <p>{toShow.title} met ID {toShow.id} en url: {toShow.iframe} </p>

            </div>


        </div>
    );
}

export default Detail;

