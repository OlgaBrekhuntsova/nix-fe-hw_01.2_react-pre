import styles from "./ModalWindow.module.css";
import classNames from "classnames";
import { useState } from "react";
const ModalWindow = ({ children }) => {
     let [modalState, setModalState] = useState(modalState);
    function toggleModal(modalState) { setModalState(modalState?"isUnlocked":"isHidden") };
  
    return (    <div data-modal className={classNames(styles.backdrop, styles.isHidden)}>
        <div className={styles.formLayout}>
            <button data-modal-close class={styles.modalCloseBtn} type="button" onClick={toggleModal(modalState)}>
                { console.log(modalState)}
                <svg className={styles.closeIcon}>
                    <use href="./images/icons/sprite.svg#icon-close"></use>
                </svg>
            </button>
            { children}
        </div>
    </div>)
}
export default ModalWindow;