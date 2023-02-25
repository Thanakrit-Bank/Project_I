import React from 'react'
import { DatePicker } from 'antd';
// import moment from 'moment';
// import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const SelectDate = (props) => {

    return (
        <div>
        <RangePicker 
            onChange={(val) => props.dateChange(val.toString())}
            className="rangepicker"
            picker={props.picker}
        />
      </div>
    )
}

export default SelectDate;