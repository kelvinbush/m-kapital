import React from 'react';
import styles from './Funding.module.scss'
import FundingHero from "../../components/Funding/FundingHero";
import Current from "../../components/Current/Current";
import LoanHistory from "../../components/LoanHistory/LoanHistory";

const Funding = () => {
  return (
    <section className={styles.funding}>
      <div className={styles.funding__hero}>
        <FundingHero />
      </div>
      <div className={styles.funding__current}>
        <Current />
      </div>
      <div className={styles.funding__history}>
        <LoanHistory />
      </div>
    </section>
  );
};

export default Funding;
