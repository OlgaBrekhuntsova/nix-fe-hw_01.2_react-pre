import styles from "./SocialLinks.module.css";
import classNames from 'classnames';

const SocialLinks = ({ children }) => {
    return (
                        <ul className={classNames(styles.listItemSocialList, styles.socialList)}>
                            <li className={classNames(styles.listItemSocialListItem, styles.socialListItem)}>
                                <a className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на инстагам"
                                >
                                    <div className={styles.socialListLinkBlock}> <svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(styles.listItemSocialListItem, styles.socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на твиттер"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(styles.listItemSocialListItem, styles.socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на фейсбук"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(styles.listItemSocialListItem, styles.socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на линкт-ин"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
                                </a>
                            </li>
                        </ul>
                            
    )
}

export default SocialLinks;