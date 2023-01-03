import React, { useState,useEffect } from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function CalendRR(props) {

  const [picker, setPicker]  = useState('year')
  const groupYear = 
  [
  // Indices_bak
  'rcp45_PRCPTOT', 'rcp85_PRCPTOT',
  'rcp45_TMEANmean', 'rcp85_TMEANmean',
  // Indices
  'rcp85_CDD', 'rcp45_CDD',
  'rcp85_CSDI', 'rcp45_CSDI',
  'rcp85_CWD', 'rcp45_CWD',
  'rcp85_DTR', 'rcp45_DTR',
  'rcp85_FD0', 'rcp45_FD0',
  'rcp85_FD16', 'rcp45_FD16',
  'rcp85_ID0', 'rcp45_ID0',
  'rcp85_PRCPTOT', 'rcp45_PRCPTOT',
  'rcp85_R10mm', 'rcp45_R10mm',
  'rcp85_R20mm', 'rcp45_R20mm',
  'rcp85_R25mm', 'rcp45_R25mm',
  'rcp85_R95p', 'rcp45_R95p',
  'rcp85_R99p', 'rcp45_R99p',
  'rcp85_RX1day', 'rcp45_RX1day',
  'rcp85_RX5day', 'rcp45_RX5day',
  'rcp85_SDII', 'rcp45_SDII',
  'rcp85_SU25', 'rcp45_SU25',
  'rcp85_SU35', 'rcp45_SU35',
  'rcp85_TMAXmean', 'rcp45_TMAXmean',
  'rcp85_TMEANmean', 'rcp45_TMEANmean',
  'rcp85_TMINmean', 'rcp45_TMINmean',
  'rcp85_TN10P', 'rcp45_TN10P',
  'rcp85_TN90P', 'rcp45_TN90P',
  'rcp85_TNn', 'rcp45_TNn',
  'rcp85_TNx', 'rcp45_TNx',
  'rcp85_TR20', 'rcp45_TR20',
  'rcp85_TR25', 'rcp45_TR25',
  'rcp85_TX10P', 'rcp45_TX10P',
  'rcp85_TX90P', 'rcp45_TX90P',
  'rcp85_TXn', 'rcp45_TXn',
  'rcp85_TXx', 'rcp45_TXx',
  'rcp85_WSDI', 'rcp45_WSDI'
  ]
  
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
          className="mapcompare calend-right"
          picker={picker}
        />
      </div>
  );
}

export default CalendRR;