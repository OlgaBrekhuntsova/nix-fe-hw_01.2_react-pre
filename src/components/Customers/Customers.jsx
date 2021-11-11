   import styles from "./Customers.module.css";
import customersList from './customersList.json';
import classNames from "classnames";

const CustomersSection = () => {
  return (<section className={styles.customers}>
    < div className = { styles.container }>
      <h2 className={classNames("title", styles.title)}>Постоянные клиенты</h2>
      <ul className={styles.list}>
        {customersList.map(({ id, altDescr, link, logo, logoAtr }) => <li key={ id} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={link}
            target="_blank"
            aria-label={ altDescr}
          >
            <div className={styles.listItemLinkBlock}><svg className={styles.listItemLinkBlockIcon} logoatr={ logoAtr}><use href={logo}></use></svg></div>
          </a>
        </li> )}                     
      </ul>
    </div>
  </section>)
};
export default CustomersSection;