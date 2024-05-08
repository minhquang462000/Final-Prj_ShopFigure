
import * as React from 'react';
import SlideItem from '../Slide/SlideItem';
import { IProduct } from '@/interfaces';
import { addDotToNumber } from '@/helpers/addDotToNumber';
import moment from 'moment';

export interface ICardProductItemProps {
  data:IProduct
}

export default function CardProductItem (props: ICardProductItemProps) {
const {data} = props
const formatDateTime = (dateTime: any) => {
  return moment(dateTime).format("DD/MM/YYYY");
};
  return (
    <div className='grid grid-cols-5 gap-4 '>
        <div className='col-span-3'>
        <SlideItem  images={data?.images}/>
        </div>
        <nav className="flex col-span-2  flex-col gap-2">
             <div className='flex flex-wrap'>
             <h1 className="text-2xl font-medium text-wrap">
              {data?.name}
               
              </h1>
              <span className={` ${data?.quantity>0 ? "bg-[#38bf57]" : "bg-[#ff0000]"} w-max text-xs px-1 py-[2px] rounded text-white`}>
                  {" "}
                 {data?.quantity>0 ? "Còn hàng" : "Hết hàng"}
                </span>
             </div>
              <h4>
                Thương hiệu:{" "}
                <span className="text-[#ff0000] font-bold px-1">{data?.brand.name}</span> |
                Loại:{" "}
                <span className="text-[#ff0000] font-bold px-1">
                  Game Prize
                </span>
              </h4>
              <p className="text-[#ff0000] font-medium text-2xl">
               {addDotToNumber(data?.price)} <span className="underline">đ</span>
              </p>
              <p className="">
                Tiêu đề: <span className="font-bold ">Bản thường</span>
              </p>
              <ul className="flex items-center gap-2">
                <li className="border rounded-md cursor-pointer p-2">
                  Bản thường
                </li>
                <li className="border rounded-md cursor-pointer p-2">
                  Bản limited
                </li>
              </ul>
             
              <button className="flex flex-col font-bold text-sm w-full rounded-md py-2  items-center text-white bg-[#ff0000]">
                THÊM VÀO GIỎ
                <span>Vui lòng Đọc Kỹ Ngày Phát Hành</span>
              </button>
              <ul className="flex items-center flex-wrap  gap-4 py-2 ">
                Tags:
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  {data?.character.name}
                </li>
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  Phát hành {formatDateTime(data?.created_at)}
                </li>
               {data?.categories?.map((item: any) => (
                  <li
                    className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200"
                    key={item._id}
                  >
                    {item.name}
                  </li>
                ))}
              
              </ul>
            </nav>
    </div>
  );
}
