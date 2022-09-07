import React from 'react';
import styles from './Current.module.scss'
import {AiFillEye} from "react-icons/ai";
import CurrentLoan from "../Charts/CurrentLoan";
import DiasporaLoan from "../Charts/DiasporaLoan";

const Current = () => {
  return (
    <div className={styles.current}>
      <div className={styles.current__tabs}>
        <p className={styles.current__tabs_active}>Current Loans</p>
        <p>Current Private equity</p>
      </div>
      <div className={styles.current__header}>
        <p>KES 3,000,000</p>
        <AiFillEye />
      </div>
      <p className={styles.borrow}>Borrowed Loan</p>
      
      <div>
        <CurrentLoan />
      </div>
      
      <div className={styles.current__pie}>
        <div className={styles.header}>
          <p>Diaspora SME Loan</p>
          <p>Active</p>
        </div>
        <div className={styles.chart}>
          <DiasporaLoan/>
        </div>
      </div>
    </div>
  );
};

export default Current;
