import styles from "./Menu.module.css";
// import React, { useState} from "react";
import classNames from 'classnames';
const Menu = ({ menuList, contactsList, menuState}) => {
      return (
         <div className={classNames(menuState? (styles.isOpen) : "", styles.menuWrapper)} data-menu>
              <nav className={styles.navigation}>
                        <ul className={styles.navList}>
                            {menuList.map( ({label,link, current }) => <li key={ label}className={styles.navListItem}>
                                <a className={styles.navListLink} href={ link}
                                > <span className={classNames( current?(styles.current):"", styles.navListLinkText)}>{label}</span></a
        >
        </li>                            )}
        </ul>
        </nav>
            <address className={styles.adress}>
                        <ul className={styles.adressList}>
                            {contactsList.map(({id, label, link, type, image})=><li key={id } className={styles.adressListItem}>
        <a
                                    className={styles.adressListItemLink}
                                    href={link}
        >
                                    <svg className={classNames(styles.adressIcon, type==="mail"? styles.mail :(type==="mob"? styles.mob :""))}>
                                        <use href={image }></use>
        </svg>
                                    { label}</a
        >
        </li>)}
                </ul>
        </address> 
</div>
            );
};
export default Menu;