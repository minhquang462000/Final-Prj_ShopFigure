import { IUser } from '@/interfaces';
import * as React from 'react';
import { FaTruckFast } from 'react-icons/fa6';

export interface IFormYourorderProps {
    data:IUser
}

export default function FormYourOrder(props: IFormYourorderProps) {
    return (
        <div className='text-center bg-white w-full p-4 rounded-xl'>
            <ul className='flex w-full  font-semibold'>
                <li className='w-[15%] px-2'>Mã đơn hàng</li>
                <li className='w-1/5 px-2'>Ngày đặt</li>
                <li className='w-1/5 px-2'>Thành tiền</li>
                <li className='w-[25%] px-2'>Trạng thái thanh toán</li>
                <li className='w-1/5 px-2'>Vân chuyển</li>
            </ul>
            <div className='w-full felx flex-col gap-5'>
                <ul className='flex w-full pt-3 mt-2  border-t-[1px] '>
                    <li className='w-[15%]'>#046</li>
                    <li className='w-1/5'>12/12/2021</li>
                    <li className='w-1/5'>100.000đ</li>
                    <li className='w-[25%]'>Thanh toán khi nhận hàng</li>
                    <li className='w-1/5 ' >
                        <span className='flex justify-center bg-[#d62828] p-1 w-max px-2 font-bold rounded-xl text-sm mx-auto  text-white items-center gap-1'>Đang giao <FaTruckFast /></span>
                    </li>
                </ul>
                <ul className='flex w-full pt-3 mt-2  border-t-[1px] '>
                    <li className='w-[15%]'>#046</li>
                    <li className='w-1/5'>12/12/2021</li>
                    <li className='w-1/5'>100.000đ</li>
                    <li className='w-[25%]'>Thanh toán khi nhận hàng</li>
                    <li className='w-1/5 ' >
                        <span className='flex justify-center bg-[#d62828] p-1 w-max px-2 font-bold rounded-xl text-sm mx-auto  text-white items-center gap-1'>Đang giao <FaTruckFast /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
