import React from 'react';
import Sidebar from './Sidebar';
import BodyContent from './BodyContent';

const Body = () => {
  return (
    <div className='m-3 flex'>
      <Sidebar />
      <div className='flex-grow'>
        <BodyContent />
      </div>
    </div>
  );
};

export default Body;
