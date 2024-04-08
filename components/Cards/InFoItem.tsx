import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export interface IInfoItemProps {
}

export default function InfoItem(props: IInfoItemProps) {
  const [showAllIfo, setShowAllInfo] = React.useState(false);
  return (
    <div className={`col-span-1 rounded-md relative h-max bg-white p-4`}>
      <h1 className="text-xl  font-bold mb-4">THÔNG TIN SẢN PHẨM</h1>
      <div className={`${!showAllIfo ? "h-[450px] overflow-hidden " : "max-h-max"} `}>
      <div className={` w-full text-sm flex mb-4 flex-col border `}>
        <tr className='flex items-center h-[90px] overflow-hidden border-b gap-2 justify-between'>
          <td className='w-1/4 h-full   font-bold flex items-center pl-[6px] text-orange-400 '>Tên sản phẩm</td>
          <td className='w-3/4 h-full line-clamp-4 p-2  border-l '>Asuka Langley Soryu Grimrock! PLUS 1/8 Scale Resin Cast Assembly Kit Mold Color White sdas sd asdas asd</td>
        </tr>
        <tr className='flex items-center h-[35px] overflow-hidden border-b gap-2'>
          <td className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center ' >Series</td>
          <td className='w-3/4 h-full flex items-center pl-3 line-clamp-1 border-l '>Evangelion</td>
        </tr>
        <tr className='flex items-center h-[45px] overflow-hidden border-b gap-2 justify-between'>
          <td className='w-1/4 h-full  pl-[6px] text-orange-400 font-bold flex items-center  '>Thương hiệu</td>
          <td  className='w-3/4 h-full   flex items-center pl-3 pl- line-clamp-1   border-l '>RC Berg</td>
        </tr>
        <tr className='flex items-center overflow-hidden h-[65px] border-b gap-2 justify-between'>
          <td className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Ngày phát hành</td>
          <td  className='w-3/4 h-full flex items-center pl-3 line-clamp-1  border-l '>late 06/2024</td>
        </tr>
        <tr className='flex items-center h-[45px] overflow-hidden border-b gap-2 justify-between'>
          <td className='w-1/4 h-full pl-[6px] text-orange-400 line-clamp-1  font-bold flex items-center  '>Giá hãng đề xuất</td>
          <td  className='w-3/4 h-full flex items-center pl-3    border-l '>13,200 JPY</td>
        </tr>
        <tr className='flex items-center h-[105px] overflow-hidden border-b gap-2 justify-between'>
          <td className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Đặc điểm</td>
          <td  className='w-3/4 h-full flex items-center pl-3 line-clamp-4 border-l '>Resin Cast Assembly Kit, 1/8 Scale, Approx. H: 185mm, Features eye decals, Requires assembly asdasdsa asdas asdasd</td>
        </tr>
        <tr className='flex items-center h-[150px] overflow-hidden  gap-2 justify-between'>

          <td className='w-1/4 h-full pl-[6px] text-orange-400  font-bold flex items-center '>Mô tả chi tiết tình trạng</td>
          <td  className='w-3/4 h-full flex items-center pl-3  border-l line-clamp-7'>Please contact JH Figure - the official model shop in Ho Chi Minh City to confirm the product status. Specializing in anime models, hololive, honkai impact, genshin, popmart...
          </td>
        </tr>
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
