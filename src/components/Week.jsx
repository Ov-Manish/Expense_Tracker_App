import React from 'react'
import { useState } from 'react';
import Bars from './Bars';

const Week = ({ weeksInMonths }) => {

  const weeks = weeksInMonths()

  console.log(weeks);
  

    
  return (
    <div>
      <Bars weeks={weeks} />
    </div>
  )
}

export default Week