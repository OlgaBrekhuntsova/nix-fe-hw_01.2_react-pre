import styles from "./Specialization.module.css";
import specializationList from './specializationList.json';
import classNames from "classnames";

const SpecializationSection = () => {
  return (<section className={styles.specialization}>
    < div className={styles.container}>
      <h2 className={classNames("title", styles.title)}>Чем мы занимаемся</h2>
      <ul className={styles.list}>
        {specializationList.map(({ id, link, label, imgDesk1x, imgDesk2x, imgAlt, name }) => 
          <li key={id} className={styles.listItem}>
          {/* Переход на соответствующую страницу портфолио*/}
          <a
            className={styles.listItemLink}
            href={link}
            aria-label={label}>
            <picture>
              <source srcSet={imgDesk1x+" 1x,"+imgDesk1x+" 2x"} type="image/webp" />
              <img
                srcSet={imgDesk2x+" 2x"}
                src={imgDesk1x}
                alt={imgAlt}
                width="370"
                height="294"
              />
            </picture>
            <p className={classNames("subtitle", styles.subtitle)}>{name}</p>
          </a>
        </li>
        )}
      </ul>
    </div>
  </section>)
}
  export default SpecializationSection;