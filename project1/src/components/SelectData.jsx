import React from 'react'
import legendData from  './../data/dataLegend'  
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <optgroup label="Indices_bak">
              {Object.keys(legendData).map((p, index) => {
                  return <option value={p} key={index}>{p}</option>

              })}
            </optgroup>
        </select>
  )
}

export default SelectData