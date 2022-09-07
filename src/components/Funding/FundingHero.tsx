import React from 'react';
import {FiArrowUpRight} from "react-icons/fi";
import styles from './FundingHero.module.scss'

const FundingHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__actions}>
        <p className={styles.header}>Get more funding today!</p>
        <p className={styles.content}>What kind of funding would you like to get for your business?</p>
        <div className={styles.hero__actions__calls}>
          <div>
            <p>Get <br /> A Loan</p>
            <FiArrowUpRight />
          </div>
          <div>
            <p>Get Private <br /> Capital</p>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
      <div className={styles.hero__stats}>
        <p>Fund statistics</p>
        <div>
          <p>KES 6,690,900</p>
          <p>Total private capital</p>
        </div>
        <div>
          <p>KES 3,000,000</p>
          <p>Total loan borrowed</p>
        </div>
      </div>
    </div>
  );
};

export default FundingHero;
