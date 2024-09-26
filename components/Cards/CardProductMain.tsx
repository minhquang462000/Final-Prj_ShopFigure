'use client';
import { addDotToNumber } from "@/helpers/addDotToNumber";
import { IProduct } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export interface ICardProductHomeProps {
  data: IProduct;
}

export default function CardProductMain(props: ICardProductHomeProps) {
  const { data } = props;
  const router = useRouter();


  return (
    <nav className="relative group/search hover:shadow-lg hover:shadow-neutral-400 py-1 rounded-md  border-[1px] overflow-hidden">
      <div className="w-[95%] flex flex-col  gap-3 mx-auto p-1 h-max  overflow-hidden">
        <Link href={`/products/${data?.product_id}`}>
          <div className="w-full cursor-pointer  relative h-[220px]">
            <img
              className="w-full h-full object-cover"
              src={data?.images[0]}
              alt=""
            />
            <IoSearchOutline
              size={40}
              className="bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]"
            />
          </div>
        </Link>
        <Link href={`/products/${data?.product_id}`}>
          {" "}
          <h3 className="leading-5 mt h-10 overflow-hidden cursor-pointer line-clamp-2">
            {data?.name}
          </h3>
        </Link>
        <div className="flex  justify-between text-[#e44c4c] font-medium items-center text-sm">
          <span className={`flex gap-4 items-center ${data.quantity === 0 && "hidden"}`}>
            <p>
              {addDotToNumber(
                (data?.price - (data?.price * data?.discount) / 100)
              )}{" "}
              <span className="underline">đ</span>
            </p>
            <p className={`text-gray-500  line-through ${data?.discount > 0 && data?.quantity > 0 ? "block" : "hidden"} `}>
              {" "}
              {data?.price}  <span className="underline ">đ</span>
            </p>
          </span>
          <span className={`bg-[#ff2121] text-white p-1 text-xs rounded-md py-[2px] ${data?.quantity == 0 || data?.quantity == null ? "block" : "hidden"}`}>Hết hàng</span>
          <button className="mr-4 text-xl">{0 < 1 ? <FaRegHeart /> : <FaHeart />}</button>
        </div>
        <span className="bg-[#20b648] text-white -rotate-45 absolute pb-1 -top-7 -left-9  text-center text-[11px] font-bold pt-12 w-max px-4 m-auto">
          Pre-order
        </span>
        {Number(data?.discount) > 0 && (
          <span
            className={`italic bg-[#ff2121] text-white px-2 py-1 absolute top-2 right-3 text-xs rounded font-medium `}
          >
            -{data?.discount}%
          </span>
        )}
      </div>
    </nav>
  );
}
