import React from "react";
import Info from "./Info";
import Contact from "./Contact";
import Box from "./Box";
// import '../Projectinfo/page.css'
export default function Projectinfo() {
  return (
    <>
    <div>
      <div>
      <Info/>
      </div>
      <div className="absolute left-[60%] top-[5%] w-[430px]">
        <Box/>
      </div>
    </div>
    </>
  );
}
