import styles from "./Footer.module.css";
import classNames from "classnames";
import SocialLinks from "../generic/SocialLinks/SocialLinks";
import mySocials from "./mySocials.json";
import SignForm from '../generic/SignForm/SighForm';

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
                  target="_blank">г. Киев, пр-т Леси Украинки, 26</a
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
            <ul className={styles.socialList}>
             <SocialLinks inst={mySocials.inst} twit={ mySocials.twit} fb={mySocials.fb } lkn={ mySocials.lkn} theme="darkTheme"/>
                      </ul>
        </div>
        <SignForm/>        
      </div>
    </footer>) }
export default Footer;