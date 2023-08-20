import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-48 border-r border-gray-300'>
      <div className='mb-6'>
        <div className='flex items-center'>
          <ul className='w-3/4 pb-3 border-b border-gray-300'>
            <li className='py-1 px-2'>Home</li>
            <li className='py-1 px-2'>Shorts</li>
            <li className='py-1 px-2'>Subscriptions</li>
          </ul>
        </div>
      </div>
      <div className='mb-6'>
        <div className='flex items-center'>
          <ul className='w-3/4 pb-3 border-b border-gray-300'>
            <li className='py-1 px-2'>Library</li>
            <li className='py-1 px-2'>History</li>
            <li className='py-1 px-2'>Your Videos</li>
            <li className='py-1 px-2'>Watch Later</li>
            <li className='py-1 px-2'>Liked Videos</li>
          </ul>
        </div>
      </div>
      <div>
        <p className='text-gray-600 mb-2 px-2'>Explore</p>
        <ul>
          <li className='py-1 px-2'>Trending</li>
          <li className='py-1 px-2'>Music</li>
          <li className='py-1 px-2'>Movies</li>
          <li className='py-1 px-2'>Live</li>
          <li className='py-1 px-2'>Gaming</li>
          <li className='py-1 px-2'>Learning</li>
          <li className='py-1 px-2'>News</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
