import styles from "./SocialLinks.module.css";
import classNames from 'classnames';
import socialList from './socialList.json';

const SocialLinks = ({ inst, twit, fb, lkn, theme }) => {
    const socialsObj = { "inst": inst, "twit": twit, "fb": fb, "lkn": lkn };
    return (
        <ul className={classNames(styles.listItemSocialList, styles.socialList)}>
            {socialList.map(({ id, name, label, icon }) => <li key={id} className={classNames(styles.listItemSocialListItem, styles.socialListItem)}>
                    <a className={styles.listItemSocialListLink}
                    href={socialsObj[Object.keys(socialsObj).find(item => item === name)]||"Ссылка не найдена"}
                    aria-label={label } >
                    <div className={styles.socialListLinkBlock} theme={ theme}> <svg className={styles.socialListLinkIcons}  theme={ theme}> <use href={ icon}></use></svg></div>
                                </a>
                            </li>) }                            
                        </ul>                            
    )
}
export default SocialLinks;
