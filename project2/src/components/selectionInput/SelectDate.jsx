import React, {useState, useEffect} from 'react'
import { DatePicker } from 'antd';
// import moment from 'moment';
// import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const SelectDate = (props) => {
    const [picker, setPicker] = useState('year')
    useEffect(() => {setPicker(props.picker)}, [props.picker]);

    return (
        <div>
        <RangePicker 
            onChange={(val) => props.dateChange(val.toString())}
            className="rangepicker"
            picker={picker}
        />
      </div>
    )
}

export default SelectDate