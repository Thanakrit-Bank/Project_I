import React, { useEffect, useState } from 'react'
import { LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    BarChart, 
    Legend, 
    Bar,
    ResponsiveContainer } from 'recharts';
import './timeSeries.css'

const TimeSeries = (props) => {
    // width={450} height={250}
    // const data = props.dataType === 'overall'? props.data : props.data1 ;
    const [data, setData] = useState(props.data)
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')

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
 
    if (props.type === 'Linechart') {
        return (
            <ResponsiveContainer height={props.height} width={props.width} debounce={1} className='graph'>
                <LineChart data={data}>
                {/* <LineChart width={450} height={250} data={data} className='graph'> */}
                    {/* <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/> */}
                    <CartesianGrid stroke="white" strokeOpacity={0.5} fill='white' fillOpacity={0}/>
                    <Line type="monotone" dataKey={value} stroke="red" dot={false}/>
                    <XAxis dataKey={key}/>
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom"/>
                </LineChart>
            </ResponsiveContainer>
        )
    }
    else {
        return (
            <ResponsiveContainer height={props.height} width={props.width} debounce={1} className='graph'>
                <BarChart data={data}>
                {/* <BarChart width={450} height={250} data={data} className='graph'> */}
                    {/* <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/> */}
                    <CartesianGrid stroke="white" strokeOpacity={0.5} fill='white' fillOpacity={0}/>
                    <XAxis dataKey={key} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={value} fill="#3288bd" /> 
                    {/* #8884d8 */}
                </BarChart>
             </ResponsiveContainer>
        )
    }
}

export default TimeSeries;