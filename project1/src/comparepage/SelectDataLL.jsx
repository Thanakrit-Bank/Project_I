import React from 'react'
import legendData from  '../data/dataLegend'  
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectDataLL(props) {
  return (
    <select onChange={(e) => props.onChengeSelect(e.target.value)} className='mapcompare select-data-left'>
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

export default SelectDataLL