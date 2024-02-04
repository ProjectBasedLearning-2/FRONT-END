import React from "react";
import Team from "./Team";
export default function About() {
  return (
    <div>
      <h1 className="text-[48px] absolute left-[40%] top-[10%] font-semibold">
        OUR TEAM
      </h1>
      <div className="absolute top-[35%] left-[7%] flex flex-row gap-[30px]">
        <Team />
      </div>
    </div>
  );
}
