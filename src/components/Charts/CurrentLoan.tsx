import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

function CurrentLoan() {
  
  const data = [
    {
      name: 'Jan',
      uv: 15000,
    },
    {
      name: 'Feb',
      uv: 20000,
    },
    {
      name: 'March',
      uv: 25000,
    },
    {
      name: 'Apr',
      uv: 14000,
    },
    {
      name: 'May',
      uv: 15000,
    },
    {
      name: 'Jun',
      uv: 30000,
    }
  ];
  return (
    
    <ResponsiveContainer className={'area'} width="99%" height={300}>
      <AreaChart
        data={data}
      >
        <defs>
          <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="name"  tickLine={false} interval="preserveEnd"/>
        <YAxis
          tickLine={false}
          interval="preserveEnd"
          tickFormatter={(value) => `${value.toLocaleString().slice(0, -4)}k`}/>
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#ffab00" fill="url(#MyGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CurrentLoan;
