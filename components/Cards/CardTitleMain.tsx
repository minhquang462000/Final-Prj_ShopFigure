import * as React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface ICardTitleMainProps {
}

export default function CardTitleMain (props: ICardTitleMainProps) {
  return (
    <nav className='text-black flex justify-between py-4  items-center '>
    <h1 className='text-xl font-bold pl-3 border-l-[3px] border-black'>HOT PRODUCT</h1>
      
    <button className='flex text-sm items-center text-gray-500    '>Xem tất cả <MdKeyboardDoubleArrowRight /></button>
   </nav>
  );
}
