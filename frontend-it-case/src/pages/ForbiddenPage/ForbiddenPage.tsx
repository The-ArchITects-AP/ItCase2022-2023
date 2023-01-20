import styles from "./ForbiddenPage.module.css";

const ForbiddenPage = () => {
    return (
        <div className={styles.forbiddenContainer}>
            <h3>You are not authorized to access this page</h3>
        </div>
    );
};

export default ForbiddenPage;