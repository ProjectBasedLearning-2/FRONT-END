import React from 'react'
import Link from 'next/link';
export default function Title() {
  return (
    <>
      <div className="absolute left-[6%] top-[20%] w-[40%] text">
        <p className="text-[48px] font-semibold py-[15px]">
          Smart <span className="text-[#43C949]">Irrigation</span> Solutions for
          Today's Agriculture.
        </p>
        <p className="text-[18px] font-mono py-[5px]">
          Welcome to Smart Irrigation Solutions for Today's Agriculture! We're
          all about making farming smarter and more efficient.Our tools are
          useful for farmers to use water wisely and schedule the irrigation
          basis on soil moisture data through sensors.
        </p>

        <Link href="/Dashboard">
          <button className="bg-gradient-to-r from-[#49c14f] to-[#00af09] w-[190px] h-[60px] my-[45px] rounded-[15px] font-semibold hover:scale-[1.03] hover:transition ease-in-out duration-[800ms]">
            GET STARTED
          </button>
        </Link>
      </div>
    </>
  );
}
