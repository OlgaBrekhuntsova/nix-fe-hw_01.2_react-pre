import styles from "./MainWrapper.module.css";

const MainWrapper = ({ children }) => <main className={styles.wrapper}> {children}</main>
export default MainWrapper;