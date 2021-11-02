import styles from "./Container.module.css";

const Container = ({ children }) => {
    return (<div className={styles.bodyWrapper}>
         <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,900;1,400;1,700&display=swap');
        </style>
            {children}
    </div>);};
export default Container;