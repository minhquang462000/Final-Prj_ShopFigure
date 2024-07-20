import * as React from 'react';
import CardProductMain from './CardProductMain';

export interface ICardTitleSelectProps {
  title: string;
}

export default function CardTitleCollection({ title }: ICardTitleSelectProps) {

  return (
    <nav className='text-black flex justify-between py-2   items-center '>
      <h2 className='text-xl font-bold pl-3 border-l-[3px] border-black'>{title.toUpperCase()}</h2>

      <section className='flex   justify-between items-center gap-8  text-sm '>
        <p>Sắp xếp :</p>
        <ul className='flex text-end gap-2 max-w-[350px]  overflow-x-auto items-center flex-nowrap whitespace-nowrap '>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Nổi bật</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Giá: Tăng dần</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Giá: Giảm dần</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>A - Z</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Z - A</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Mới nhất</li>
          <li className='cursor-pointer border-[1px] rounded-md p-2 my-2 hover:text-white hover:bg-[#fc4444]'>Bán chạy</li>
        </ul>
      </section>
    </nav>
  );
}
