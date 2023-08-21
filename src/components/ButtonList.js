import React from 'react'
import Button from './Button'
const btnList = [
    "All",
    "Unwatched",
    "Shorts",
    "Live",
    "New to you",
    "Podcasts",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Comedy",
    "Coding",
    "Technology",
    "Education",
    // "Cooking",
    // "Fitness",
    // "Travel",
    // "Fashion",
    // "Art",
    // "Science",
  ];
  
const ButtonList = () => {
  return (
    <div className='flex whitespace-nowrap'>
        {btnList.map((btn, index)=>{
            return <Button name={btn} key={index}/>
        })}
    </div>
  )
}

export default ButtonList;