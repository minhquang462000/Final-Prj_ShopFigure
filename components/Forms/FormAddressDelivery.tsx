import * as React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaHome, FaPencilAlt, FaUserCircle } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { IoCall, IoClose } from 'react-icons/io5';
import AddressCard from '../Cards/AddressCard';
import { IUser } from '@/interfaces';

export interface IFormAddressDeliveryProps {
  data: IUser
}

export default function FormAddressDelivery(props: IFormAddressDeliveryProps) {
  const [openEdit, setOpenEdit] = React.useState(false)
  const [openAdd, setOpenAdd] = React.useState(false)
  return (
    <div className='flex gap-4 flex-col w-full'>
      {openEdit ? <AddressCard BtnContent={"CẬT NHẬT"} setOpen={setOpenEdit} /> : <nav className=' bg-white p-4 rounded-xl flex justify-between '>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2'><FaUserCircle size={20} /> <p className='font-semibold text-lg'>nguyen minh quang</p>
            <span className='flex text-xs text-gray-500 items-center gap-1'>
              <GiCheckMark size={12} className='border text-green-500 rounded-full p-[1px] border-green-500' />
              Địa chỉ mặc định</span></li>
          <li className='flex items-center gap-2'><FaHome size={20} /></li>
          <li className='flex items-center gap-2 text-gray-500 text-sm'><IoCall color='black' size={20} />0987654321</li>
        </ul>
        <span className='flex flex-col items-center gap-3 justify-evenly '>
          <FaPencilAlt onClick={() => setOpenEdit(true)} className='bg-black text-white w-6 h-6 p-1 cursor-pointer' />
          <IoClose onClick={() => setOpenEdit(false)} className='w-8 h-8 cursor-pointer' />
        </span>
      </nav>}
      <button onClick={() => setOpenAdd(true)} className='flex items-center gap-2   py-1  font-medium bg-[#d62018] justify-center text-white rounded-full'>Bổ sung địa chỉ <AiFillPlusCircle size={20} /></button>
      <div className={`${!openAdd && "hidden"}`}>
        <AddressCard BtnContent={"THÊM MỚI"} setOpen={setOpenAdd} />
      </div>
    </div>
  );
}
