import React from 'react'
import Member from './Member';
export default function Team() {
  let info = [
    {
      src: "https://cdn-icons-png.freepik.com/256/13482/13482160.png?uid=R91415930&ga=GA1.1.1299523950.1706704366",
      name: "Shreenath B",
      role: "ML Model and Cloud",
    },
    {
      src: "https://cdn-icons-png.freepik.com/256/13482/13482192.png?uid=R91415930&ga=GA1.1.1299523950.1706704366",
      name: "Neel Satdive",
      role: "Full Stack Web Developer",
    },
    {
      src: "https://cdn-icons-png.freepik.com/256/13481/13481960.png?uid=R91415930&ga=GA1.1.1299523950.1706704366",
      name: "Kunal Shinde",
      role: "IOT and Web Design",
    },
    {
      src: "https://cdn-icons-png.freepik.com/128/13482/13482054.png",
      name: "Shreya Bhide",
      role: "Ml Model & documentation",
    },
  ];
  return (
        <>
        {info.map((i)=>(
            <Member 
            avatar = {i.src}
            name = {i.name}
            role = {i.role}/>
        ))
        }
        </>
  );
}
