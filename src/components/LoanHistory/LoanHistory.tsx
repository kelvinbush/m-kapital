import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import styles from './LoanHistory.module.scss'
import {BiChevronDown} from "react-icons/bi";

function LoanHistory() {
  
  const data = [
    {
      "name": "Jan",
      "kes": 0
    },
    {
      "name": "Feb",
      "kes": 0,
    },
    {
      "name": "March",
      "kes": 0,
    },
    {
      "name": "Apr",
      "kes": 278000,
    },
    {
      "name": "May",
      "kes": 300000,
    },
    {
      "name": "June",
      "kes": 239000,
    },
  
  ]
  
  return (
    <div className={styles.container}>
      <p>Loan History <span><BiChevronDown /></span></p>
      <div style={{height: "230px", width: "auto"}}>
        <ResponsiveContainer className={"bar"}>
          <BarChart data={data}>
            <XAxis dataKey="name" tickLine={false} />
            <Tooltip />
            <Bar dataKey="kes" fill="#ffab00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LoanHistory;
