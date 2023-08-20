import React from 'react'
import Sidebar from './Sidebar'
import BodyContent from './BodyContent'
const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar/>
      <BodyContent/>
    </div>
  )
}

export default Body;