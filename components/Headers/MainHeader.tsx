import Image from 'next/image';
import * as React from 'react';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

export interface IAppProps {
}

export default function MainHeader(props: IAppProps) {
  return (
    <header className='w-screen  py-2 bg-gradient-to-t from-red-700 to-orange-500'>
      <nav className='w-[1280px] mx-auto flex gap-6 justify-between items-center'>
        <div className='w-[250px]'> <Image src="/vercel.svg" alt="Vercel Logo" width={150} height={30} /></div>
        <section className='flex items-center gap-2 bg-white  justify-between  rounded-md border-2 w-[500px]  border-white'>
          <input className='outline-none bg-transparent placeholder:text-black px-2 text-black' placeholder='Bạn đang tìm gì ??' type="text" />
          <IoMdSearch className='bg-gradient-to-r from-red-600 to-orange-500 text-[40px] rounded-md py-1 w-[70px] ' />
        </section>
        <ul className='grid grid-cols-5 leading-5 font-medium  text-sm  gap-5 text-wrap'>
          <li className='flex items-center gap-2 w-full cursor-pointer '>
            <FiPhoneCall size={40} />
            <span>Hotline 0867040620</span>
          </li>
          <li className='flex items-center gap-2 w-full cursor-pointer '>
            <GrMapLocation size={40} />
            <span className='flex flex-wrap items-center '><span>Hệ thống </span><span>cửa hàng</span> <IoIosArrowDown size={15} />
            </span>
          </li>
          <li className='flex items-center relative gap-2 w-full cursor-pointer '>
            <FaRegUser size={40} />
            <span className='flex flex-wrap items-center '>Đăng nhập<span>Đăng ký </span><IoIosArrowDown size={15} />
            </span>
          </li>
          <li className='flex items-center relative gap-4 w-full cursor-pointer '>
            <FaRegHeart size={40} />
            <div className='absolute text-xs pb-[2px] -top-1 left-4 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white'>0</div>
            <span>Sản phẩm yêu thích</span>
          </li>
          <li className='flex items-center relative  border-2 cursor-pointer h-full px-2 rounded-md border-white gap-2 w-full '>
            <IoCartOutline size={30} />
            <div className='absolute text-xs pb-[2px] -top-1 left-6 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white'>0</div>
            <span>Giỏ hàng</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
