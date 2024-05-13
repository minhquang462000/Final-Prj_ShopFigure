import * as React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface ICardTitleMainProps {
  title: string;
  urlLink: string;
}

export default function CardTitleMain(props: ICardTitleMainProps) {
  const { title, urlLink } = props;
  return (
    <div className='text-black flex justify-between py-4  items-center '>
      <h3 className='text-xl font-bold pl-3 border-l-[3px] border-black'>{title.toUpperCase()}</h3>

      <button className='flex text-sm items-center text-gray-500    '>Xem tất cả <MdKeyboardDoubleArrowRight /></button>
    </div>
  );
}
