import React from 'react'
import legendData from  './../data/dataLegend'  
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectData(props) {
  return (
    <select onChange={(e) => props.onChengeSelect(e.target.value)} className='map-view select-data'>
      {Object.keys(legendData).map((folder) => {
        return <optgroup label={folder} key={folder}>
          {Object.keys(legendData[folder]).map((p, index) => {
            return <option value={p+"*"+folder} key={index}>{p}</option>
          })}
        </optgroup>
      })}
    </select>
  )
}

export default SelectData