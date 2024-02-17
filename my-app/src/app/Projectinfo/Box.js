import React from "react";

export default function Box(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="NAME"
        className="w-[100%] border-2 border-solid-black py-[25px] px-[30px] rounded-[20px] mb-[35px]"
      ></input>
      <input
        type="email"
        placeholder="EMAIL"
        className="w-[100%] border-2 border-solid-black py-[25px] px-[30px] rounded-[20px] mb-[35px]"
      ></input>
      <input
        type="text"
        placeholder="FEEDBACK"
        className="w-[100%] border-2 border-solid-black py-[100px] px-[30px] rounded-[20px] mb-[35px]"
      ></input>
      <button className="w-[100%] py-[25px] rounded-[20px] bg-[#B9FFB7] font-semibold hover:scale-[1.012]">SUBMIT</button>
    </div>
  );
}
