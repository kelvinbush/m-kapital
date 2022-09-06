import React from 'react';
import styles from './Funding.module.scss'
import FundingHero from "../../components/Funding/FundingHero";

const Funding = () => {
  return (
    <section className={styles.funding}>
      <div className={styles.funding__hero}>
        <FundingHero />
      </div>
      <div className={styles.funding__history}></div>
      <div className={styles.funding__current}></div>
    </section>
  );
};

export default Funding;
