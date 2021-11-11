import styles from "./Features.module.css";
import featuresList from './featuresList.json';
import classNames from "classnames";

const FeaturesSection = () => {
  return (    
    <section className={styles.features}>
            <div className={styles.container}>
        <h2 className={styles.title} hidden>Характерные черты</h2>
        <ul className={styles.list}>
          {featuresList.map(({ id, name, icon, description }) => <li key={ id} className={styles.listItem}>
              <div className={styles.listItemBlock}>
              <svg className={styles.listItemBlockIcon}><use href={ icon}></use></svg></div>
            <h3 className={classNames("subtitle", styles.subtitle)}>{ name}</h3>
              <p className={styles.description}>
              { description}
              </p>
            </li>)}
                 </ul>
        </div>
        </section >)
        };
      export default FeaturesSection;
