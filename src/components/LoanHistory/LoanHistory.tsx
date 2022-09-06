import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

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
    <div>
      <p>Loan History</p>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="name"  tickLine={false} />
          <Tooltip />
          <Bar dataKey="uv" fill="#ffab00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LoanHistory;
