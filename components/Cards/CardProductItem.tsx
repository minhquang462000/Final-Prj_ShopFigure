'use client'
import * as React from 'react';
import SlideItem from '../Slide/SlideItem.jsx';
import { ICategory, IProduct } from '@/interfaces';
import { addDotToNumber } from '@/helpers/addDotToNumber';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import { count } from 'console';
import { useRouter } from 'next/navigation';
import Link from 'next/link.js';

export interface ICardProductItemProps {
  data: IProduct
  id_cart?: number
}

export default function CardProductItem(props: ICardProductItemProps) {
  const { data, id_cart } = props
  const router = useRouter()
  const handleClickAddToCart = async () => {
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${id_cart}`, {
      product_id: data?.product_id
    }).then((res) => {
      toast.success('Đã thêm vào giỏ hàng')
      router.refresh()
    }).catch((e) => {
      toast.error(e.response.data.message)
    })
  }
  const formatDateTime = (dateTime: any) => {
    return moment(dateTime).format("DD/MM/YYYY");
  };
  return (
    <div className='grid grid-cols-5 gap-4 '>
      <div className='col-span-3'>
        {data?.images?.length === 1 ?
          <img className="w-full aspect-square  object-cover" src={data?.images[0]} alt="" />
          : <SlideItem images={data?.images} />}

      </div>
      <nav className="flex col-span-2  flex-col gap-2">
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className="text-2xl font-medium max-h-[130px] line-clamp-4 overflow-hidden text-wrap">
            {data?.name}
          </h3>
          <span className={` ${data?.quantity > 0 ? "bg-[#38bf57]" : "bg-[#ff0000]"} w-max h-max  text-xs px-1 py-[2px] rounded text-white`}>
            {" "}
            {data?.quantity > 0 ? "Còn hàng" : "Hết hàng"}
          </span>
        </div>
        <h4>
          Thương hiệu:{" "}
          <span className="text-[#ff0000] font-bold px-1">{data?.brand}</span> |
          Loại:{" "}
          {/* {data?.categories.map((item) => <p className="text-[#ff0000] font-bold px-1">
            <Link href={`/collect/${item.name}`}>{item.name}</Link>
          </p>).join(", ")} */}
          {data?.categories.map((item) => <span className="text-[#ff0000]  font-bold px-1"><Link href={`/collections/${item.name}`}>{item.name}</Link>,</span>)}

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
        <button onClick={handleClickAddToCart} className="flex flex-col font-bold text-sm w-full rounded-md py-2  items-center text-white bg-[#ff0000]">
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
          {data?.categories?.map((item: any, index: number) => (
            <li
              className="px-2 rounded-lg hover:bg-[#9cf2fd] cursor-pointer hover:text-white text-sm font-medium py-[2px] bg-gray-200"
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
