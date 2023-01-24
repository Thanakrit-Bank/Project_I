import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './timeSeries.css'

const TimeSeries = (props) => {
    // width={450} height={250}
    return (
        <LineChart width={450} height={250}  data={props.data} className='graph'>
        {/* <LineChart data={data} margin={{'top': 500}}> */}
            <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/>
            <Line type="monotone" dataKey="index" stroke="red" dot={false}/>
            <XAxis dataKey="date" stroke="white"/>
            <YAxis stroke="white"/>
            <Tooltip />
        </LineChart>
    )
}

export default TimeSeries