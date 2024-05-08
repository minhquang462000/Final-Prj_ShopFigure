import { ICharacter } from '@/interfaces';
import * as React from 'react';

export interface ICardFigurerops {
  data: ICharacter
}

export default function CardFigure(props: ICardFigurerops) {
  const { data } = props;
  
  return (
    <div className="flex w-full flex-col pb-3 items-center">
    <button className="w-[100px] h-[100px] border-[1px] border-gray-400 rounded-lg overflow-hidden">
      <img className="w-full h-full hover:scale-150 transition-all  duration-700 object-cover  " 
      src={process.env.NEXT_PUBLIC_BASE_URL +"/"+ data?.thumbnail} alt="" />
    </button>
    <p className=" my-3  w-[100px] truncate hover:text-[#d70018]  text-center cursor-pointer text-sm">{data?.name}</p>
  </div>
  );
}


