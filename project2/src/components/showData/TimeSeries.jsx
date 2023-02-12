import { propertiesContainsFilter } from '@turf/turf';
import React, { useEffect, useState } from 'react'
import { LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    BarChart, 
    Legend, 
    Bar } from 'recharts';
import './timeSeries.css'

const TimeSeries = (props) => {
    // width={450} height={250}
    const data = props.dataType === 'overall'? props.data : props.data2 ;
    const  [key, setKey] = useState('')
    const  [value, setValue] = useState('') 

    useEffect(() => {
        console.log(data);
        console.log(props.dataType);
        if (props.dataType === 'overall'){
            setKey('date')
            setValue('index')
        }else {
            setKey('month')
            setValue('value')
        }
    },[props.dataType, props.data, props.data1])

    

    if(props.type === 'Linechart'){
        return (
            <LineChart width={450} height={250}  data={data} className='graph'>
            {/* <LineChart data={data} margin={{'top': 500}}> */}
                <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/>
                <Line type="monotone" dataKey={value} stroke="red" dot={false}/>
                <XAxis dataKey={key} stroke="black"/>
                <YAxis stroke="black"/>
                <Tooltip />
            </LineChart>
            )
    }
    else {
        return (
            <BarChart width={450} height={250} data={data} className='graph'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={key} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={value} fill="#8884d8" />
            </BarChart>
        )
    }
}

export default TimeSeries