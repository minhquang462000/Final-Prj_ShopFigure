'use client'
import { addDotToNumber } from '@/helpers/addDotToNumber';
import { IProduct } from '@/interfaces';
import moment from 'moment';
import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export interface IInfoItemProps {
  data:IProduct
}

export default function InfoItem(props: IInfoItemProps) {
  const formatDateTime = (dateTime: any) => {
    return moment(dateTime).format("DD/MM/YYYY");
  };
  const [showAllIfo, setShowAllInfo] = React.useState(false);
  const {data} = props
  return (
    <div className={`col-span-1 rounded-md relative h-max bg-white p-4`}>
      <h1 className="text-xl  font-bold mb-4">THÔNG TIN SẢN PHẨM</h1>
      <div className={`${!showAllIfo ? "h-[450px] overflow-hidden " : "max-h-max"} `}>
      <div className={` w-full text-sm flex mb-4 flex-col border `}>
        <ul className='flex items-center h-[90px] overflow-hidden border-b gap-2 justify-between'>
          <li className='w-1/4 h-full   font-bold flex items-center pl-[6px] text-orange-400 '>Tên sản phẩm</li>
          <li className='w-3/4 h-full line-clamp-4 p-2  border-l '>{data.name}</li>
        </ul>
        <ul className='flex items-center h-[35px] overflow-hidden border-b gap-2'>
          <li className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center ' >Series</li>
          <li className='w-3/4 h-full flex items-center pl-3 line-clamp-1 border-l '>{data.series.name}</li>
        </ul>
        <ul className='flex items-center h-[45px] overflow-hidden border-b gap-2 justify-between'>
          <li className='w-1/4 h-full  pl-[6px] text-orange-400 font-bold flex items-center  '>Thương hiệu</li>
          <li  className='w-3/4 h-full   flex items-center pl-3 pl- line-clamp-1   border-l '>{data.brand.name}</li>
        </ul>
        <ul className='flex items-center overflow-hidden h-[65px] border-b gap-2 justify-between'>
          <li className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Ngày phát hành</li>
          <li  className='w-3/4 h-full flex items-center pl-3 line-clamp-1  border-l '>late {formatDateTime(data.created_at)}</li>
        </ul>
        <ul className='flex items-center h-[45px] overflow-hidden border-b gap-2 justify-between'>
          <li className='w-1/4 h-full pl-[6px] text-orange-400 line-clamp-1  font-bold flex items-center  '>Giá hãng đề xuất</li>
          <li  className='w-3/4 h-full flex items-center pl-3    border-l '>{addDotToNumber(data.price)} JPY</li>
        </ul>
        <ul className='flex items-center h-[105px] overflow-hidden border-b gap-2 justify-between'>
          <li className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Đặc điểm</li>
          <li  className='w-3/4 h-full flex items-center pl-3 line-clamp-4 border-l '>{data?.characteristics}</li>
        </ul>
        <ul className='flex items-center h-[150px] overflow-hidden  gap-2 justify-between'>

          <li className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Mô tả chi tiết tình ulạng</li>
          <li  className='w-3/4 h-full flex items-center pl-3  border-l line-clamp-7'>
            Liên hệ với chúng tôi để nhận được thông tin chi tiết
          </li>
        </ul>
      </div>
      </div>
      <div className={`w-full bottom-14 left-0 absolute h-[250px] bg-gradient-to-t from-white  ${showAllIfo && "hidden"}`}></div>
      <button onClick={() => setShowAllInfo(!showAllIfo)} className="flex py-2 w-full justify-center gap-2 items-center font-medium bg-gray-100 rounded-md">
        <FaPlusCircle />
        <p >{showAllIfo ? "Thu gọn" : "Xem thêm"}</p>
      </button>
    </div>
  );
}
