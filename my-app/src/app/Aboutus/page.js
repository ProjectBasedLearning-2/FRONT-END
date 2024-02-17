import React from "react";
import Team from "./Team";
import Button from "../Accesories/Button";
export default function About() {
  return (
      <>
      <div className="title h-[86vh] w-[100%]  p-[30px] flex justify-center items-center flex-col gap-[45px]">
        <h1 className="text-[48px] text-center font-semibold">OUR TEAM</h1>
        <div className="flex justify-evenly items-center gap-[50px]">
          <Team />
        </div>
      </div>
      </>
  );
}
