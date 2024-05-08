"use client";
import * as React from "react";
// import ColorExtractor from 'react-color-extractor';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState,useEffect } from "react";
export interface ITitleCardCollectionProps {
  data: any;
}

export default  function TitleCardCollection(props: ITitleCardCollectionProps) {
  const { data } = props;
  return (
    <div className=" h-[350px] relative w-full gap-3  flex justify-between">
      <span className="text-[#D62828] w-3/5 h-4/5 font-sans text-[50px]  p-10 bg-[#EAEAEA] ">
        <p className="max-w-[280px] text-wrap ">{data?.name}</p>
      </span>
     <div className="z-20 left-14 cursor-default absolute bottom-3 flex flex-col justify-center items-center">
     <div className="text-white font-medium px-10 py-1  text-[25px]  bg-gray-400 ">
        SHOP NOW
      </div>
      <IoIosArrowDown size={40} color="gray"/>
     </div>
      <img
        className=" h-full object-cover w-2/5 object-center"
        src={process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.thumbnail}
        alt=""
      />
      <img
        className=" w-[250px] h-[250px] border-[10px] bottom-8 right-1/3 shadow-md border-white absolute object-cover  object-center"
        src={process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.thumbnail}
        alt=""
      />
      {/* <ColorThief src={process.env.NEXT_PUBLIC_BASE_URL +"/"+ data?.thumbnail} format="hex" crossOrigin="anonymous" onColor={handleColor}  />
      {color && <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>} */}
    </div>
  );
}
