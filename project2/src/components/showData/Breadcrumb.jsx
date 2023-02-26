import React from 'react'
import './breadcrumb.css'

const Breadcrumb = (props) => {

    const dataNameArray = props.selectData.split('@')
    let dataProvider = dataNameArray[0]
    let typeValue = dataNameArray[1]
    let typeIndex = dataNameArray[2]
    const indexName = dataNameArray[3]
    let temp = ''
    let date = props.selectDate
    let fdate = ''
    let ldate = ''

    if (typeIndex === 'indices') {
        fdate = date.split(' ')[3]
        ldate = date.split(' ')[8]
    } else if (date === "2006") {
        fdate = '2006'
        ldate = '2006'
        if (typeIndex !== 'indices'){
            temp = 'SPI'
        }
    }
    else {
        temp = 'SPI'
        try {
            let temp1 = date.split(' ').slice(2,4)
            let temp2 = date.split(' ').slice(7,9)
            fdate = temp1[0].concat(' ', temp1[1])
            ldate = temp2[0].concat(' ', temp2[1])
        } catch (error) {
            fdate = date.split(' ')[3]
            ldate = date.split(' ')[8]
        }
    }
    return (
        <div className="breadcrumb">
            data index: {temp} {indexName}({typeValue},{dataProvider})<br/>
            date range: {fdate} - {ldate}<br/>
            Area: {props.selectArea}<br/>
        </div>
  )
}

export default Breadcrumb;