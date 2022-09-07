import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import styles from './LoanHistory.module.scss'
import {BiChevronDown} from "react-icons/bi";

function LoanHistory() {
  
  const data = [
    {
      "name": "Jan",
      "uv": 0
    },
    {
      "name": "Feb",
      "uv": 0,
    },
    {
      "name": "March",
      "uv": 0,
    },
    {
      "name": "Apr",
      "uv": 278000,
    },
    {
      "name": "May",
      "uv": 300000,
    },
    {
      "name": "June",
      "uv": 239000,
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
            <Bar dataKey="uv" fill="#ffab00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LoanHistory;
