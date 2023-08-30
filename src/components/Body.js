import React from 'react';
import Sidebar from './Sidebar';
import BodyContent from './BodyContent';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='m-3 flex'>
      <Sidebar />
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div> 
  );
};

export default Body;
