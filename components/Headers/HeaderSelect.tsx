import * as React from 'react';
import { BsFileSpreadsheet } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { LiaHandshakeSolid } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbMessageCircleQuestion } from 'react-icons/tb';

export interface IAppProps {
}

export default function HeaderSelect(props: IAppProps) {
    return (
        <div className='w-screen shadow-md text-black  bg-white shadow-gray-400'>
            <nav className='w-[1280px] mx-auto grid grid-cols-4  fle font-medium text-start'>
                <div className='flex gap-2  h-full items-center cursor-pointer text-white py-1 p-3 bg-[#000]'>
                    <LuLayoutDashboard className='text-[30px]' /><h2 className='text-base font-bold'>MENU</h2>
                </div>
                <ul className=' grid grid-cols-4 ml-3  col-span-3 h-full text-sm '>
                    <li className='flex  hover:text-[#e44c4c] items-center cursor-pointer gap-1 '>
                        <LiaHandshakeSolid color='black' className="text-[30px]" />
                        <h3 className='font-normal '>Chính sách giao hàng & đổi trả</h3>
                    </li>
                    <li className='flex pl-4 hover:text-[#e44c4c] items-center cursor-pointer gap-1 '>
                        <IoSearchOutline color='black' className="text-[30px]" />
                        <h3 className='font-normal '>Tra cứu đơn hàng đặt trước </h3>
                    </li>
                    <li className='flex pl-4 hover:text-[#e44c4c] items-center cursor-pointer gap-1 '>
                        <BsFileSpreadsheet color='black' className="text-[25px]" />
                        <h3 className='font-normal '>Tính giá gom hàng</h3></li>
                    <li className='flex pl-4 hover:text-[#e44c4c] items-center cursor-pointer gap-1 '>
                        <TbMessageCircleQuestion color='black' className="text-[25px]" />
                        <h3 className='font-normal '>FAQ</h3></li>
                </ul>

            </nav>

        </div>
    );
}
