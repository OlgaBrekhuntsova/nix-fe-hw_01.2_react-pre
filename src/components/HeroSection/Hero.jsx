import styles from "./Hero.module.css";
  import Button from "../generic/Button/Button";

const HeroSection = () => {
  return (<section className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Эффективные решения для вашего бизнеса
      </h1>
      <Button label={'Заказать услугу'} type={"button"} modalOpen={true}/>
    </div>
  </section>)
};
      export default HeroSection;