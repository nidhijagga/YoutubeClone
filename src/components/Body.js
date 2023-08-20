import React from 'react'
import Sidebar from './Sidebar'
import BodyContent from './BodyContent'
const Body = () => {
  return (
    <div className='m-3 flex flex-wrap'>
      <Sidebar/>
      <BodyContent/>
    </div>
  )
}

export default Body;