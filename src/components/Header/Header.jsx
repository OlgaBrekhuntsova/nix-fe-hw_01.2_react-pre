import styles from "./Header.module.css";
import classNames from 'classnames';
import Logo from '../generic/Logo/Logo';

const Header = () => {
    return (
    <header>
        <div className={styles.container}> 
                <div className={styles.wrapper}>
                    <Logo/>
      
                <button className={styles.burgerBtn} type ="button" aria-expanded="false" aria-controls="menu-wrapper" data-menu-button>
                    <svg className={styles.headerBurgerWrapper}>
        <use  className={styles.headerBurgerIcon} href="./images/icons/sprite.svg#icon-burger"></use>
                        <use className={styles.headerBurgerCloseIcon} href="./images/icons/sprite.svg#icon-burger-close"></use>
        </svg>
        </button>
        </div>
            <div className={styles.menuWrapper} data-menu>
                    <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                    <li className={styles.navListItem}>
        <a className={styles.navListLink} href="./index.html"
        > <span className={classNames(styles.current, styles.navListLinkText)}>Студия</span></a
        >
        </li>
            <li className={styles.navListItem}>
        <a className={styles.navListLink} href="./portfolio.html"
        > <span className={styles.navListLinkText}>Портфолио</span></a
        >
        </li>
            <li className={styles.navListItem}>
                                <a className={styles.navListLink} href="./contacts.html">
                                    <span className={styles.navListLinkText}>Контакты</span></a>
        </li>
        </ul>
        </nav>
            <address className={styles.adress}>
        <ul className={styles.adressList}>
            <li className={styles.adressListItem}>
        <a
        className={styles.adressListItemLink}
        href="mailto:info@devstudio.com"
        >
        <svg className={classNames(styles.adressIcon, styles.mail)}>
        <use href="./images/icons/sprite.svg#icon-envelope"></use>
        </svg>
             
        info @devstudio.com</a
        >
        </li>
            <li className={styles.adressListItem}>
        <a
        className={styles.adressListItemLink}
        href="tel:+380961111111"
        >
        <svg className={classNames(styles.adressIcon, styles.mob)}>
        <use href="./images/icons/sprite.svg#icon-smartphone"></use>
        </svg>
        +38 096 111 11 11</a
        >
        </li>
        </ul>
        </address> 
        </div>
        </div>
    </header>
    );
};
export default Header;