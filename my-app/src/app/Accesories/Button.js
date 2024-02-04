
import React from 'react'
import Link from "next/link";
export default function Button(props) {
  return (
    <div>
      <Link href={props.goto}>
        <button className="bg-white w-[160px] h-10 rounded-full text-black font-semibold hover: transition hover:scale-110 hover:duration-300">
          {props.title}
        </button>
      </Link>
      {/* <button className='bg-white w-32 h-11 rounded-full text-black absolute right-[60px] top-[60px] font-semibold'>ABOUT US</button>   */}
    </div>
  );
}
