import styles from "./Hero.module.css";
  import HeroButton from "../generic/HeroButton/HeroButton";

const HeroSection = ({ children }) => {
  return (<section className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Эффективные решения для вашего бизнеса
      </h1>
      <HeroButton/>
    </div>
  </section>)
};
      export default HeroSection;