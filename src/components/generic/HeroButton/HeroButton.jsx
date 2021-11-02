import styles from "./HeroButton.module.css";

const HeroButton = () => {
  return (
      <button data-modal-open className={styles.modalBtn} type="button">Заказать услугу</button>
    )
};
      export default HeroButton;