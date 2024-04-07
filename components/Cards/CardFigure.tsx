import * as React from 'react';

export interface ICardFigurerops {
}

export default function CardFigure(props: ICardFigurerops) {
  return (
    <td className="flex w-full flex-col pb-3 items-center">
    <button className="w-[100px] h-[100px] border-[1px] border-gray-400 rounded-lg overflow-hidden">
      <img className="w-full h-full hover:scale-110 transition-all  duration-400 object-cover  " src="https://www.pngall.com/wp-content/uploads/13/Dragon-Ball-Goku-PNG-Photo.png" alt="" />
   </button>
    <p className=" my-3  w-[100px] truncate hover:text-[#d70018]  text-center cursor-pointer text-sm">SonGoKu</p>  
  </td>
  );
}
