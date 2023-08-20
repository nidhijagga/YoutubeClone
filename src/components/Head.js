import React from 'react'
import StartHead from './StartHead'
import CenterHead from './CenterHead'
import EndHead from './EndHead'

const Head = () => {
  return (
    <div className='grid grid-flow-col m-3 shadow-lg'>
      <StartHead/>
      <CenterHead/>
      <EndHead/>
    </div>
  )
}

export default Head
