import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Legend, Bar } from 'recharts';
import './timeSeries.css'

const TimeSeries = (props) => {
    // width={450} height={250}
    if(props.type === 'Linechart'){
        return (
            <LineChart width={450} height={250}  data={props.data} className='graph'>
            {/* <LineChart data={data} margin={{'top': 500}}> */}
                <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/>
                <Line type="monotone" dataKey="index" stroke="red" dot={false}/>
                <XAxis dataKey="date" stroke="black"/>
                <YAxis stroke="black"/>
                <Tooltip />
            </LineChart>
            )
    }
    else {
        return (
            <BarChart width={450} height={250} data={props.data} className='graph'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="index" fill="#8884d8" />
            </BarChart>
        )
    }
}

export default TimeSeries