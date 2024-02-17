import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export default function Member({ avatar, name, role }) {
  return (
    <div className="w-[300px] h-[350px] bg-[#ABF698] rounded-[40px] hover:scale-105 hover:transition ease-in-out duration-[800ms]">
      <img
        src={avatar}
        className="w-[110px] relative top-[5%] left-[30%] mb-[15px]"
      ></img>
      <p className="text-[25px] font-mono font-medium relative top-[8%] left-[24.5%] mb-[50px]">
        {name}
      </p>
      <p className="relative left-[21%] font-mono text-[15px] font-thin">
        {role}
      </p>

      <LinkedInIcon
        sx={{ fontSize: 45 }}
        className="relative top-[15%] left-[30%]"
      />
      <EmailOutlinedIcon
        sx={{ fontSize: 45 }}
        className="relative top-[15%] left-[38%]"
      />
    </div>
  );
}
