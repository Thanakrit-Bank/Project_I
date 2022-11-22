import React, { useState,useEffect } from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function Calend(props) {

  const [picker, setPicker]  = useState('year')
  const groupYear = ['rcp45_PRCPTOT','rcp85_PRCPTOT','rcp45_TMEANmean','rcp85_TMEANmean']
  
  useEffect(()=>{
    if (props.dataType === 'cdd_mpi' || props.dataType === 'cdd_era' || groupYear.includes(props.dataType)){
      setPicker('year')
    } else {
      setPicker('month')
    }
  }, [props.dataType])

  return (
      <div>
        <RangePicker 
          defaultValue={[moment(props.setDate), moment(props.setDate)]}
          onChange={(val) => props.onChange(val.toString())}
          className="map-calend"
          picker={picker}
        />
      </div>
  );
}

export default Calend;