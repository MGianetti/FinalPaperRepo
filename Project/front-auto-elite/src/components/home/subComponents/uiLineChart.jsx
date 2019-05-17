import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    YAxis,
    XAxis,Legend
} from 'recharts'
//Data must arrive from controller component
const UiLineChart = () => {
    const data = [
        {name: 'Page A', pv: 2400, amt: 2400},
        {name: 'Page B', pv: 1398, amt: 2210},
        {name: 'Page C', pv: 9800, amt: 2290},
        {name: 'Page D', pv: 3908, amt: 2000},
        {name: 'Page E', pv: 4800, amt: 2181},
        {name: 'Page F', pv: 3800, amt: 2500},
        {name: 'Page G', pv: 4300, amt: 2100},
    ];
    return (
        <LineChart
            width={440}
            height={352}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
            type='natural'
            dataKey='pv'
            stroke='#8884d8'
            activeDot={{r: 8}}
        />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='name'/>
        <Legend />
        </LineChart>
    );
};

export default UiLineChart;
