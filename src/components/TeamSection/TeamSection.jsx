import styles from "./TeamSection.module.css";

const TeamSection = ({ children }) => {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <h2 className={styles.title}>Наша команда</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <picture>
                            <source srcset="/images/TeamAssets/mobile-product-designer@1x.webp 1x,
                /images/TeamAssets/mobile-product-designer@2x.webp 2x" type="image/webp" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/mobile-product-designer@1x.jpg 1x,
                /images/TeamAssets/mobile-product-designer@2x.jpg 2x" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/desktop-product-designer@1x.webp 1x,
                /images/TeamAssets/desktop-product-designer@2x.webp 2x" type="image/webp" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/desktop-product-designer@1x.jpg 1x,
                /images/TeamAssets/desktop-product-designer@2x.jpg 2x" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/tablet-product-designer@1x.webp 1x,
                /images/TeamAssets/tablet-product-designer@2x.webp 2x" type="image/webp" media="(min-width: 768px)" />
                            <source srcset="/images/TeamAssets/tablet-product-designer@1x.jpg 1x,
                /images/TeamAssets/tablet-product-designer@2x.jpg 2x" media="(min-width: 768px)" />
               
                            <img
                                className={styles.listItemPhoto}
                                src="/images/TeamAssets/mobile-product-designer@1x.jpg"
                                alt="фотография продакт дизайнера"
                            />
                        </picture>
            
                        <h3 className={styles.subtitle}>Николай Кучеренко</h3>
                        <p className={styles.description} lang="en">Product Designer</p>
                        {/* <!--Блок социальных ссылок--> */}
                        {/* <ul className={classNames(listItemSocialList, socialList)}>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на инстагам"
                                >
                                    <div className={styles.socialListLinkBlock}> <svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на твиттер"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на фейсбук"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на линкт-ин"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
                                </a>
                            </li>
                        </ul> */}
                    </li>
                    <li className={styles.listItem}>
                        <picture>
                            <source srcset="/images/TeamAssets/mobile-frontend-developer@1x.webp 1x,
                /images/TeamAssets/mobile-frontend-developer@2x.webp 2x" type="image/webp" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/mobile-frontend-developer@1x.jpg 1x,
                /images/TeamAssets/mobile-frontend-developer@2x.jpg 2x" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/desktop-frontend-developer@1x.webp 1x,
                /images/TeamAssets/desktop-frontend-developer@2x.webp 2x" type="image/webp" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/desktop-frontend-developer@1x.jpg 1x,
                /images/TeamAssets/desktop-frontend-developer@2x.jpg 2x" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/tablet-frontend-developer@1x.webp 1x,
                /images/TeamAssets/tablet-frontend-developer@2x.webp 2x" type="image/webp" media="(min-width: 768px)" />
                            <source srcset="/images/TeamAssets/tablet-frontend-developer@1x.jpg 1x,
                /images/TeamAssets/tablet-frontend-developer@2x.jpg 2x" media="(min-width: 768px)" />
          
                            <img
                        className={styles.listItemPhoto}
                                src="/images/TeamAssets/mobile-frontend-developer@1x.jpg"
                                alt="фотография фронтэнд разработчика"
                            />
                        </picture>
                        <h3 className={styles.subtitle}>Ольга Иванова</h3>
                        <p className={styles.description} lang="en">Frontend Developer</p>
                        {/* <!--Блок социальных ссылок--> */}
                        {/* <ul className={classNames(listItemSocialList, socialList)}>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на инстагам"
                                >
                                    <div className={styles.socialListLinkBlock}> <svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на твиттер"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на фейсбук"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на линкт-ин"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
                                </a>
                            </li>
                        </ul> */}
                    </li>
                    <li className={styles.listItem}>
                        <picture>
                            <source srcset="/images/TeamAssets/mobile-marketing@1x.webp 1x,
                /images/TeamAssets/mobile-marketing@2x.webp 2x" type="image/webp" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/mobile-marketing@1x.jpg 1x,
                /images/TeamAssets/mobile-marketing@2x.jpg 2x" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/desktop-marketing@1x.webp 1x,
                /images/TeamAssets/desktop-marketing@2x.webp 2x" type="image/webp" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/desktop-marketing@1x.jpg 1x,
                /images/TeamAssets/desktop-marketing@2x.jpg 2x" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/tablet-marketing@1x.webp 1x,
                /images/TeamAssets/tablet-marketing@2x.webp 2x" type="image/webp" media="(min-width: 768px)" />
                            <source srcset="/images/TeamAssets/tablet-marketing@1x.jpg 1x,
                /images/TeamAssets/tablet-marketing@2x.jpg 2x" media="(min-width: 768px)" />
              
                            <img
                        className={styles.listItemPhoto}
                                src="/images/TeamAssets/mobile-marketing@1x.jpg"
                                alt="фотография маркетинг менеджера"
                            />
                        </picture>
                        <h3 className={styles.subtitle}>Андрей Шевченко</h3>
                        <p className={styles.description} lang="en">Marketing</p>
                        {/* <!--Блок социальных ссылок--> */}
                        {/* <ul className={classNames(listItemSocialList, socialList)}>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на инстагам"
                                >
                                    <div className={styles.socialListLinkBlock}> <svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на твиттер"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на фейсбук"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на линкт-ин"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
                                </a>
                            </li>
                        </ul> */}
                    </li>
                    <li className={styles.listItem}>
                        <picture>
                            <source srcset="/images/TeamAssets/mobile-UI-designer@1x.webp 1x,
                /images/TeamAssets/mobile-UI-designer@2x.webp 2x" type="image/webp" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/mobile-UI-designer@1x.jpg 1x,
                /images/TeamAssets/mobile-UI-designer@2x.jpg 2x" media="(max-width: 767px)" />
                            <source srcset="/images/TeamAssets/desktop-UI-designer@1x.webp 1x,
                /images/TeamAssets/desktop-UI-designer@2x.webp 2x" type="image/webp" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/desktop-UI-designer@1x.jpg 1x,
                /images/TeamAssets/desktop-UI-designer@2x.jpg 2x" media="(min-width: 1200px)" />
                            <source srcset="/images/TeamAssets/tablet-UI-designer@1x.webp 1x,
                /images/TeamAssets/tablet-UI-designer@2x.webp 2x" type="image/webp" media="(min-width: 768px)" />
                            <source srcset="/images/TeamAssets/tablet-UI-designer@1x.jpg 1x,
                /images/TeamAssets/tablet-UI-designer@2x.jpg 2x" media="(min-width: 768px)" />
    
                            <img
                                                                                            className={styles.listItemPhoto}
                                src="/images/TeamAssets/mobile-UI-designer@1x.jpg"
                                alt="фотография ю-ай дизайнера"
                            />
                        </picture>
                        <h3 className={styles.subtitle}>Иван Николаев</h3>
                        <p className={styles.description} lang="en">UI Designer</p>
                        {/* <!--Блок социальных ссылок--> */}
                        {/* <ul className={classNames(listItemSocialList, socialList)}>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                                                                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на инстагам"
                                >
                                    <div className={styles.socialListLinkBlock}> <svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-instagram"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на твиттер"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-twitter"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                            className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на фейсбук"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-facebook"></use></svg></div>
                                </a>
                            </li>
                            <li className={classNames(listItemSocialListItem, socialListItem)}>
                                <a
                                    className={styles.listItemSocialListLink}
                                    href=""
                                    aria-label="ссылка на линкт-ин"
                                >
                                    <div className={styles.socialListLinkBlock}><svg className={styles.socialListLinkIcons}> <use href="./images/icons/sprite.svg#icon-linkedin"></use></svg></div>
                                </a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default TeamSection;