import styles from "./SignForm.module.css";
import classNames from "classnames";
import Button from "../Button/Button";

const SignForm = () => {
    return (
<div className={styles.sign}>
          <form action="#" className={styles.formSign}>
            <label className={classNames(styles.formSignLabel, styles.title)} for="signMail">
              <b>Подпишитесь на рассылку</b> </label>
                    <div className={styles.formSignInputWrapper}>
              <input className={styles.formSignInput} type="email" name="signMail" id="signMail" placeholder="E-mail" autoComplete="on" required/>
                    <Button label={"Подписаться"} type="submit" customAtr={"formSignBtn" }>
                        <svg className={styles.signBtnSendIcon}><use href="./images/icons/sprite.svg#icon-send"></use></svg>
                  </Button>
                   
            </div>
            </form>
          </div>) }
export default SignForm;