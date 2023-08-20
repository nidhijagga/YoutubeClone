import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../Utils/sidebarSlice'

const StartHead = () => {
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className='col-span-2 flex flex-wrap cursor-pointer'>
       <img src="https://cdn-icons-png.flaticon.com/512/7466/7466737.png" alt="menu" className='h-10 my-2' onClick={()=>{
        toggle()
       }} />
       <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo" className='h-14'/>
    </div>
  )
}

export default StartHead
