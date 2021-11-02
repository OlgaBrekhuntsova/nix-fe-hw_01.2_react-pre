import styles from "./Footer.module.css";
import classNames from "classnames";
const Footer = () => {
    return ( <footer className={styles.footer}>
    < div className = { styles.container}>
        <div className={styles.contact}>
          <p className={styles.contactLogo}>
            <a className={styles.logo} href="./index.html">
              <span lang="en"
                ><span className={styles.logoAccent}> Web </span> Studio</span
              ></a>
          </p>
          <address className={styles.contactAdress}>
            <ul className={styles.contactAdresList}>
              <li className={styles.contactAdressListItem}>
                <a
                  className={classNames(styles.contactAdressListIemLink, styles.map)}
                  href="https://goo.gl/maps/14YRCTS7XbWE6uxf6"
                  target="_blank"
                  >г. Киев, пр-т Леси Украинки, 26</a
                >
              </li>
                    <li className={styles.contactAdressListItem}>
                <a
                            className={styles.contactAdressListItemLink}
                  href="mailto:info@devstudio.com"
                  lang="en"
                >
                  info@devstudio.com</a
                >
              </li>
              <li className={styles.contactAdressListItem}>
                <a
                  className={styles.contactAdressListItemLink}
                  href="tel:+380961111111"
                >
                  +38 099 111 11 11</a
                >
              </li>
            </ul>
          </address>
        </div>
        <div className={styles.social}>
            <p className={styles.title}><b>присоединяйтесь</b></p>
          {/* <!--Блок социальных ссылок--> */}
          <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <a
                className={styles.socialListItemLink}
                href=""
                aria-label="ссылка на инстагам"
              >
                <div
                  className={classNames(styles.socialListItemLinkBlock, styles.socialListLinkBlock)}
                ><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
              </a>
            </li>
                <li className={styles.socialListItem}>
              <a
                            className={styles.socialListItemLink}
                href=""
                aria-label="ссылка на твиттер"
              >
                <div
                  className={classNames(styles.socialListItemLinkBlock, styles.socialListLinkBlock)}
                ><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
              </a>
            </li>
            <li className={styles.socialListItem}>
              <a
                className={styles.socialListItemLink}
                href=""
                aria-label="ссылка на фейсбук"
              >
                            <div className={classNames(styles.socialListItemLinkBlock, styles.socialListLinkBlock)}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
              </a>
            </li>
            <li className={classNames(styles.socialListItem, styles.socialListItem)}>
              <a
                className={styles.socialListItemLink}
                href=""
                aria-label="ссылка на линкт-ин"
              >
                        <div className={classNames(styles.socialListItemLinkBlock, styles.socialListLinkBlock)}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.sign}>
          <form action="#" className={styles.formSign}>
            <label className={classNames(styles.formSignLabel, styles.title)} for="sign-mail">
              <b>Подпишитесь на рассылку</b> </label>
                    <div className={styles.formSignInputWrapper}>
              <input className={styles.formSignInput} type="email" name="sign-mail" id="sign-mail" placeholder="E-mail" autocomplete="on" required/>
              <button type="submit" className={classNames(styles.modalBtn, styles.formSignBtn)}>Подписаться
                <svg className={styles.signBtnSendIcon}><use href="./images/icons/sprite.svg#icon-send"></use></svg>
              </button>
            </div>
            </form>
          </div>
      </div>
    </footer>) }
export default Footer;