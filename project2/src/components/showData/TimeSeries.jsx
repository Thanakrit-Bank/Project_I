import React, { useRef, useEffect, useState } from 'react'
import { LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    BarChart, 
    Legend, 
    Bar } from 'recharts';
import Draggable from 'react-draggable';
import './timeSeries.css'

const TimeSeries = (props) => {
    // width={450} height={250}
    // const data = props.dataType === 'overall'? props.data : props.data1 ;
    const [data, setData] = useState(props.data)
    const  [key, setKey] = useState('')
    const  [value, setValue] = useState('')

    useEffect(() => {
        if (props.dataType === 'Overall'){
            setKey('date')
            setValue('index')
            setData(props.data)
        }else {
            setKey('month')
            setValue('value')
            setData(props.data2)
        }
    },[props.dataType, props.data, props.data2])

    
    
    if(props.type === 'Linechart'){
        return (
                <LineChart width={450} height={250}  data={data} className='graph'>
                {/* <LineChart data={data} margin={{'top': 500}}> */}
                    <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/>
                    <Line type="monotone" dataKey={value} stroke="red" dot={false}/>
                    <XAxis dataKey={key} stroke="black"/>
                    <YAxis stroke="black" />
                    <Tooltip />
                </LineChart>
            )
    }
    else {
        return (
            <div>
                <BarChart width={450} height={250} data={data} className='graph'>
                    <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/>
                    <XAxis dataKey={key} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={value} fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}

export default TimeSeries