import * as React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export interface IListPromotionProps {
}

export default function ListPromotion (props: IListPromotionProps) {
  return (
    <ul className='text-xs grid grid-cols-1 grid-rows-10 w-full mb-4   gap-3'>
      <li className='w-full flex col-span-1  min-h-[70px] overflow-hidden gap-2'>
        <button  className='w-[40%] h-[70px] bg-cover ' style={{backgroundImage: 'url("https://file.hstatic.net/200000462939/article/83vb6wf2_img7_j4pxg3kq_480x480_1__4c799193280d451f9f399f89398abbf8_large.jpg")'}}></button>
       <div className='flex flex-col w-[60%]  gap-1'>
       <h3 className='text-sm text-w line-clamp-2 cursor-pointer  '>Tiêu đề bài Post abc abc bac bidklfjdkfjsdklmf sdokhjfsd odkfjsd kjdfkl kljsdfkl kljsdfklj sdflkjsd sdfklfjds kjfdkll sdkfjds</h3>
        <span className='flex items-center text-xs font-light gap-1'>
        <IoCalendarNumberOutline size={20} />
        <span>05/05/2022</span>
        </span>
       </div>
      </li>
    
      </ul>
  );
}
