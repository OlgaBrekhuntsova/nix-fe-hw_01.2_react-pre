import styles from "./BodyWrapper.module.css";

const BodyWrapper = ({ children }) => {
    return (<div className={styles.bodyWrapper}>
                 {children}
    </div>);};
export default BodyWrapper;