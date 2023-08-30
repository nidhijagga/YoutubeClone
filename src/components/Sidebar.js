import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const toggleSidebar = useSelector((store) => store.sidebar.isOpen);
  if (!toggleSidebar) return null;

  const mainLinks = ['Home', 'Shorts', 'Subscriptions'];
  const libraryLinks = ['Library', 'History', 'Your Videos', 'Watch Later', 'Liked Videos'];
  const exploreLinks = ['Trending', 'Music', 'Movies', 'Live', 'Gaming', 'Learning', 'News'];

  return (
    <div className='w-48 flex-shrink-0'>
      <div className='mb-6'>
        <div className='flex items-center'>
          <ul className='w-full pb-5 border-b border-gray-300'>
            {mainLinks.map((link, index) => (
              <li key={index} className='py-1 px-2 m-2 hover:bg-gray-200 hover:rounded-3xl'>
              {index === 0 ? (
                <Link to="/" className='text-blue-600 hover:underline'>{link}</Link>
              ) : (
                link
              )}
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='mb-6'>
        <div className='flex items-center'>
          <ul className='w-full pb-5 border-b border-gray-300'>
            {libraryLinks.map((link, index) => (
              <li key={index} className='py-1 px-2 m-2 hover:bg-gray-200 hover:rounded-3xl'>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className='text-gray-600 mb-3 px-2 font-bold text-lg'>Explore</p>
        <ul>
          {exploreLinks.map((link, index) => (
            <li key={index} className='py-1 px-2 m-2 hover:bg-gray-200 hover:rounded-3xl'>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
