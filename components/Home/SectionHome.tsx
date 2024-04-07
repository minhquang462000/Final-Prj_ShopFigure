import Image from 'next/image';
import * as React from 'react';
import { BsBox } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { GoGift } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { LiaRobotSolid } from 'react-icons/lia';
import { MdOutlineNewReleases } from 'react-icons/md';
import { SiSuperuser } from 'react-icons/si';
import { TbUserPentagon } from 'react-icons/tb';
import img18 from "@/public/icon/age_limit.png"
export interface IAppProps {
}

export default function SectionHome (props: IAppProps) {
  return (
    <ul className='flex flex-col gap-2 overflow-y-auto h-[362px]  bg-white  border-[0.2px]  border-gray-300 py-2 '>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer gap-5'> <GoGift color='#e44c4c' size={26}/><p>HOT DEALS</p></li>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer gap-5'><MdOutlineNewReleases color='black' size={25}/><p>Sản phẩm mới nhất</p></li>
    <li className='py-1  px-2 flex hover:text-[#e44c4c] items-center cursor-pointer justify-between'><p className=' flex gap-5 items-center'> 
    <FaRegUser color='black' size={25}/>PVC Figures</p><IoIosArrowForward color='black' size={15} className='' /></li>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer gap-5'><FaRegUser color='black' size={25}/><p>RESIN Figures</p></li>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer justify-between'>
      <p className='flex gap-5 items-center'> <SiSuperuser color='black' size={25} />Mô hình hoạt hình</p><IoIosArrowForward color='black' size={15} className='' /></li>
    <li  className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer gap-5'>
      <LiaRobotSolid color='black' size={25}/><p>GunDam/Plastic Model</p></li>
    <li className='py-1 group flex px-2 hover:text-[#e44c4c] items-center cursor-pointer justify-between'>
      <p className='flex gap-5 items-center '> <TbUserPentagon color='black' size={25}/>Mô hình siêu nhân</p>
      <IoIosArrowForward color='black' size={15} className='' />
      <nav className=" text-black shadow-sm shadow-gray-500 w-3/4 group-hover:block hidden top-0 right-0 absolute   z-20 bg-white h-[362px] ">
  <h3 className="font-bold text-lg border-b p-2 pl-5  ">Thể Loại</h3>
 <ul className="grid grid-cols-6 font-medium pt-4 pl-8">
  <li className="hover:text-[#e44c4c]  cursor-pointer">The Loai 1</li>

 </ul>
</nav>
      </li>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer justify-between'>
      <p className='flex gap-5 items-center'><BsBox color='black' size={25}/> Pre-order/ Order</p><IoIosArrowForward color='black' size={15} className='' /></li>
    <li className='py-1 flex px-2 hover:text-[#e44c4c] items-center cursor-pointer gap-5'>
      <Image src={img18} width={25} height={25} alt="img18"/>
      <p>Age Restricted Products</p></li>
</ul>
  );
}
