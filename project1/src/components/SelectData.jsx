import React from 'react'
import legendData from  './../data/dataLegend'  
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SelectData(props) {
  return (
        // <DropdownButton 
        //     className='map-view select-data'  
        //     onSelect={(e) => props.onChengeSelect(e)} 
        //     id="dropdown-basic-button" 
        //     title={props.type}>

        //         {Object.keys(legendData).map((name, index) => {
        //                 return <Dropdown.Item eventKey={name} key={index}>{name}</Dropdown.Item>
        //             })}
        // </DropdownButton>
        <select onChange={(e) => props.onChengeSelect(e.target.value)} className='map-view select-data'>
            {/* <option value='all' defaultValue>All Province</option> */}
            {Object.keys(legendData).map((p, index) => {
                return <option value={p} key={index}>{p}</option>
            })}               
        </select>
  )
}

export default SelectData