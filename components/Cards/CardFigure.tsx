import { ICharacter } from '@/interfaces';
import Image from 'next/image';
import * as React from 'react';

export interface ICardFigureProps {
  data: ICharacter
}

export default function CardFigure(props: ICardFigureProps) {
  const { data } = props;

  return (
    <div className="flex w-full flex-col pb-3 items-center">
      <button className=" border-[1px] border-gray-400 rounded-lg overflow-hidden">
        <Image
          width={100}
          height={100}
          className=" hover:scale-110 transition-all  duration-700 object-cover hover:object-top "
          src={data?.thumbnail} alt="" />
      </button>
      <p className=" my-3  w-[100px] truncate hover:text-[#d70018]  text-center cursor-pointer text-sm">{data?.name}</p>
    </div>
  );
}


