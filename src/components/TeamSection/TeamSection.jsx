import styles from "./TeamSection.module.css";
import teamList from './teamList.json';
import classNames from "classnames";
import SocialLinks from "../generic/SocialLinks/SocialLinks";

const TeamSection = () => {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <h2 className={classNames("title", styles.title)}>Наша команда</h2>
                <ul className={styles.list}>
                    {teamList.map(({ id, name, imgAlt, imgMob1x, imgMob2x, imgTab1x, imgTab2x, imgDesk1x, imgDesk2x, position, inst, twit, fb, lkn }) =>
                        <li key={id } className={styles.listItem}>
                        <picture>
                            <source srcSet={imgMob1x+" 1x,"+imgMob2x+" 2x"} type="image/webp" media="(max-width: 767px)" />
                            <source srcSet={imgMob1x+" 1x,"+imgMob2x+" 2x"} media="(max-width: 767px)" />
                            <source srcSet={imgDesk1x+" 1x,"+imgDesk2x+" 2x"} type="image/webp" media="(min-width: 1200px)" />
                            <source srcSet={imgDesk1x+" 1x,"+imgDesk2x+" 2x"} media="(min-width: 1200px)" />
                            <source srcSet={imgTab1x+" 1x,"+imgTab2x+" 2x"} type="image/webp" media="(min-width: 768px)" />
                            <source srcSet={imgTab1x+" 1x,"+imgTab2x+" 2x"} media="(min-width: 768px)" />
               
                            <img
                                    className={styles.listItemPhoto}
                                    src={imgMob1x}
                                    alt={ imgAlt}
                            />
                        </picture>            
                            <h3 className={classNames("subtitle", styles.subtitle)}>{ name}</h3>
                            <p className={styles.description} lang="en">{position}</p>
                            <SocialLinks inst={inst} twit={twit} fb={fb } lkn={lkn} theme="lightTheme"/>
                     </li>)}
                </ul>
            </div>
        </section>
    )
}
export default TeamSection;