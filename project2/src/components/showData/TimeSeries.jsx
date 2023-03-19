import React, { useRef, useEffect, useState } from 'react'
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
import Draggable from 'react-draggable';
import './timeSeries.css'

const TimeSeries = (props) => {

    const [data, setData] = useState(props.data)
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')

    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    });

    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
          return;
        }
        setBounds({
          left: -targetRect.left + uiData.x,
          right: clientWidth - (targetRect.right - uiData.x),
          top: -targetRect.top + uiData.y,
          bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };
  
    const draggleRef = useRef(null);

    useEffect(() => {
        if (props.dataType === 'Overall'){
            setKey('date')
            setValue('index')
            setData(props.data)
        } else {
            setKey('month')
            setValue('value')
            setData(props.data2)
        }
    }, [props.dataType, props.data, props.data2])
 
    if (props.type === 'Linechart') {
        return (
            <ResponsiveContainer 
                height={props.height} 
                width={props.width} 
                debounce={1} 
                className='graph'
            >
                <LineChart 
                    data={data}
                    style={{
                        width: '100%',
                        cursor: 'move',
                    }}
                    onMouseEnter={() => {
                        if (disabled) {
                            setDisabled(false);
                        }
                    }}
                    onMouseLeave={() => {
                        setDisabled(true);
                    }}
                    onClick={(graph) => (
                        <Draggable
                            disabled={disabled}
                            bounds={bounds}
                            onStart={(event, uiData) => onStart(event, uiData)}
                        >
                        <div ref={draggleRef}>{graph}</div>
                        </Draggable>
                    )}
                >
                {/* <LineChart width={450} height={250} data={data} className='graph'> */}
                    {/* <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/> */}
                    <CartesianGrid 
                        stroke="white" 
                        strokeOpacity={0.5} 
                        fill='white' 
                        fillOpacity={0}
                    />
                    <Line 
                        name={props.dataIndexName} 
                        unit={props.dataIndexName.unit} 
                        type="monotone" 
                        dataKey={value} 
                        stroke="red" 
                        dot={false}
                    />
                    <XAxis dataKey={key}/>                        <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom"/>
                    <Draggable />
                </LineChart>
            </ResponsiveContainer>    
        )
    }
    else {
        return (
            <Draggable
                disabled={disabled}
                bounds={bounds}
                onStart={(event, uiData) => onStart(event, uiData)}
            >
                <ResponsiveContainer 
                    height={props.height} 
                    width={props.width} 
                    debounce={1} 
                    className='graph'
                >
                    <BarChart 
                        data={data}
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseEnter={() => {
                            if (disabled) {
                                setDisabled(false);
                            }
                        }}
                        onMouseLeave={() => {
                            setDisabled(true);
                        }}
                        onMouseMove={() => {
                            <div ref={draggleRef}></div>
                        }}
                    >
                    {/* <BarChart width={450} height={250} data={data} className='graph'> */}
                        {/* <CartesianGrid stroke="black" fill='#555' fillOpacity={0.7}/> */}
                        <CartesianGrid 
                            stroke="white" 
                            strokeOpacity={0.5} 
                            fill='white' 
                            fillOpacity={0}
                        />
                        <Bar 
                            name={props.dataIndexName} 
                            unit={props.dataIndexName.unit} 
                            dataKey={value} 
                            fill="#3288bd" 
                        />
                        <XAxis dataKey={key} />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="bottom"/> 
                        {/* #8884d8 */}
                    </BarChart>
                </ResponsiveContainer>
            </Draggable>
        )
    }
}

export default TimeSeries;