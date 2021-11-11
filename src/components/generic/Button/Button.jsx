import styles from "./Button.module.css";

const Button = ({ label, type, customAtr, modalOpen, children }) => {
  return (
    <button type={type} className={styles.modalBtn} btnatr={customAtr} data-modal-open={modalOpen} >{label}{ children}</button>
      )
};
export default Button;
      
