import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';

function Calend() {
  const [date, setDate] = useState(new Date('2006', '00', '01'));

  return (
      <div>
        <Calendar
        //   onChange={(e) => setDate(e.target.value)}
          onChange={setDate}
          value={date}
          selectRange={true}
          className='map-calend'
        />
      {date.length > 0 ? (
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
      )}
      </div>
  );
}

export default Calend;