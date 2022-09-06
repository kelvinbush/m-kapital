import React from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from "recharts";

function DiasporaLoan() {
  
  const data = [
    {name: 'Loan Balance', value: 1900000},
    {name: 'Amount Repaid', value: 2100000},
  ];
  
  const COLORS = ['#ccc', '#ffab00']
  
  const RADIAN = Math.PI / 180;
  // @ts-ignore
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (<>
        <defs>
          <filter x="0" y="0" width="1" height="1" id="solid">
            <feFlood flood-color="#f0eeee" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text className={"pie-label"}
              filter="url(#solid)"
              x={x} y={y} fill="grey" textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central">
          KES {data[index].value.toLocaleString()}
        </text>
      </>
    );
  };
  
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Legend verticalAlign="bottom" height={36} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={450}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DiasporaLoan;
