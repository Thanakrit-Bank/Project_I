import React from 'react'
import { DatePicker } from 'antd';
import './selectDate.css'

const { RangePicker } = DatePicker;

const SelectDate = () => {
  return (
    <RangePicker className='rangepicker'/>
  );
}

export default SelectDate