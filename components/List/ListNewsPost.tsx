import * as React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export interface IListNewsPostsProps {
}

export default function ListNewsPosts (props: IListNewsPostsProps) {
  return (
    <nav className='grid grid-cols-2 mb-4 gap-4'>
      <div className='w-full flex flex-col font-extralight  gap-3'>
        <img className='w-full h-[300px] object-cover  cursor-pointer' src="https://file.hstatic.net/200000462939/article/83vb6wf2_img7_j4pxg3kq_480x480_1__4c799193280d451f9f399f89398abbf8_large.jpg" alt="" />
        <h1 className='text-xl line-clamp-2  cursor-pointer font-medium'>Tiêu đề bài Post abc abc bac bidklfjdkfjsdklmf sdokhjfsd odkfjsd kjdfkl kljsdfkl kljsdfklj sdflkjsd sdfklfjds kjfdkll sdkfjds</h1>
        <p className='line-clamp-3 text-lg  leading-5'>Description shda sadjh ákjdh ádjkh ídgh hjsbdv jhsac sạkdh jknasd jkhsad jkl jshd jkshd ạkds ádjbn ádjh ạdn nbsdjk dkjsa nkdjas sadkh sd klsad klsdja klsjad klsdj msdja ádjnas ádbn dạkldh ádjkn sadkn âsdhg</p>
        <span className='flex items-center text-sm font-light gap-1'>
        <IoCalendarNumberOutline size={20} />
        <span>05/05/2022</span>
        </span>
      </div>
      <tr className='text-xs flex mt-1 flex-col gap-3'>
      <td className='w-full flex  gap-2'>
        <button  className='w-2/5 h-[150px] bg-cover bg-center ' style={{backgroundImage: 'url("https://file.hstatic.net/200000462939/article/83vb6wf2_img7_j4pxg3kq_480x480_1__4c799193280d451f9f399f89398abbf8_large.jpg")'}}></button>
       <div className='flex flex-col w-2/3 gap-3'>
       <h1 className='text-sm line-clamp-2 cursor-pointer font-medium'>Tiêu đề bài Post abc abc bac bidklfjdkfjsdklmf sdokhjfsd odkfjsd kjdfkl kljsdfkl kljsdfklj sdflkjsd sdfklfjds kjfdkll sdkfjds</h1>
        <span className='flex items-center text-xs  gap-1'>
        <IoCalendarNumberOutline size={20} />
        <span>05/05/2022</span>
        </span>
       </div>
      </td>
      
      </tr>
    </nav>
  );
}
