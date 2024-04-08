import * as React from 'react';
import SlideItem from '../Slide/SlideItem';

export interface ICardProductItemProps {
}

export default function CardProductItem () {
  return (
    <div className='grid grid-cols-2 gap-4 '>
        <SlideItem/>
        <nav className="flex  flex-col gap-2">
             <div className='flex flex-wrap'>
             <h1 className="text-2xl font-medium text-wrap">
                Date A Live IV - Tokisaki Kurumi - Artist MasterPiece+ - Zafkiel
                | Taito Figure{" "}
               
              </h1>
              <span className="bg-[#38bf57] w-max text-xs px-1 py-[2px] rounded text-white">
                  {" "}
                  Còn hàng
                </span>
             </div>
              <h4>
                Thương hiệu:{" "}
                <span className="text-[#ff0000] font-bold px-1">Taito</span> |
                Loại:{" "}
                <span className="text-[#ff0000] font-bold px-1">
                  Game Prize
                </span>
              </h4>
              <p className="text-[#ff0000] font-medium text-2xl">
                650,000 <span className="underline">đ</span>
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
              <div className="flex text-2xl font-medium border w-max items-center gap-4">
                <button className="p-1 px-3">-</button>
                <input type="text" className="outline-none w-[15px] text-center bg-transparent" defaultValue={"1"} min={"1"} />
                <button className="p-1 px-3">+</button>
              </div>
              <button className="flex flex-col font-bold text-sm w-full rounded-md py-2  items-center text-white bg-[#ff0000]">
                THÊM VÀO GIỎ
                <span>Vui lòng Đọc Kỹ Ngày Phát Hành</span>
              </button>
              <ul className="flex items-center flex-wrap  gap-4 py-2 ">
                Tags:
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  Tokisagi Karumi
                </li>
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  Phát hành 2024/2
                </li>
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  Date A Live
                </li>
                <li className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200">
                  Date A Live
                </li>
              </ul>
            </nav>
    </div>
  );
}
