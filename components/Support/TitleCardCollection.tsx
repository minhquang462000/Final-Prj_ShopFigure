"use client";
// import ColorExtractor from 'react-color-extractor';
import { IoIosArrowDown } from "react-icons/io";
import { ICharacter } from "@/interfaces";
import { useEffect, useRef, useState } from "react";
import ColorThief from "colorThief"
export interface ITitleCardCollectionProps {
  character: ICharacter;
}

export default function TitleCardCollection({ character }: ITitleCardCollectionProps) {
  const imageSrc = `${process.env.NEXT_PUBLIC_BASE_URL}/${character?.thumbnail}`;


  const [color, setColor] = useState([]);

  const extractColor = () => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const colorThief = new ColorThief();
      const x = 50; // Tọa độ x
      const y = 100; // Tọa độ y

      // Lấy màu tại điểm ảnh (x, y)
      const colorFill = colorThief.getColor(img, x, y);
      const dominantColor = colorThief.getColor(img);
      setColor(dominantColor);
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
    };
  };
  function darkenColor(r: number, g: number, b: number, amount: number) {
    // Tăng giá trị của mỗi thành phần màu
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);

    // Trả về màu mới
    return [r, g, b];
  }
  useEffect(() => {
    extractColor();
  }, [extractColor]);

  return (
    <div className=" h-[350px] relative w-full gap-3  flex justify-between">
      <div
        style={{ backgroundColor: `rgb(${darkenColor(color[0], color[1], color[2], 20)})` }}
        className={` w-3/5 h-4/5  p  p-10 `}>
        <p className="max-w-[280px] leading-[80px] text-[70px]  text-white font-mono text-wrap ">{(character?.name)}</p>
      </div>
      <div className="z-20 left-14 cursor-default absolute bottom-3 flex flex-col justify-center items-center">
        <div className="text-white font-medium px-10 py-1  text-[25px]  bg-gray-400 ">
          SHOP NOW
        </div>
        <IoIosArrowDown size={40} color="gray" />
      </div>
      <img
        className={`h-full object-cover w-2/5 shadow-md shadow-[rgb(${darkenColor(color[0], color[1], color[2], 80)})] object-top`}
        src={imageSrc} crossOrigin="anonymous"
        onLoad={extractColor}
        alt=""
      />
      <div className={`w-[250px] h-[250px] overflow-hidden border-[10px] bottom-8 bg-white shadow-[rgb(${darkenColor(color[0], color[1], color[2], 80)})] right-1/3 shadow-lg border-white absolute`}>
        <img
          className={`w-full h-full  object-cover  object-top`}
          src={imageSrc} crossOrigin="anonymous"
          alt=""
        />
      </div>

    </div>
  );
}
