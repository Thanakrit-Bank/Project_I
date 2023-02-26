import React, { useState } from 'react'
import ComparePage from './ComparePage'

const ComparePage2 = () => {

  const [mode, setMode] = useState(false)

  const modeChange = ((mode) => {
    setMode(mode)
    console.log(mode);
  })

  return (
    <ComparePage mode = {mode} modeChange={modeChange}/>
  )
}

export default ComparePage2