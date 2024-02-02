import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='bg-white w-32 h-10 rounded-full text-black font-semibold'>{props.title}</button>
      {/* <button className='bg-white w-32 h-11 rounded-full text-black absolute right-[60px] top-[60px] font-semibold'>ABOUT US</button>   */}
    </div>
  )
}
