import React, { useState,useEffect } from 'react'
import Calendar from 'react-calendar';
import { DatePicker, Space} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function Calend(props) {

  const [picker, setPicker]  = useState('month')

  useEffect(()=>{
    if(props.dataType === 'cdd_mpi' || props.dataType === 'cdd_era'){
      setPicker('year')
    }else{
      setPicker('month')
    }
  },[props.dataType])

  return (
      <div>
        {/* <Calendar
          onChange={(e) => onChangeDate(e)}
          value={date}
          selectRange={true}
          className='map-calend'
        /> */}
        {/* {date.length > 0 ? (
          <p className='map-calend text'>
            <span className='bold'>Start:{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            End: {date[1].toDateString()}</span>
          </p>
        ) : (
          <p className='map-calend text'>
            <span className='bold'>Default selected date: {' '}
            {date.toDateString()}</span>
          </p>
        )} */}

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