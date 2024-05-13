"use client";
import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { IProduct } from "@/interfaces";
import { addDotToNumber } from "@/helpers/addDotToNumber";
import Link from "next/link";
export interface ISliderProductProps {
  data: IProduct[];
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={` bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-yellow-500 to-red-600 shadow-md shadow-orange-500 w-max rounded-sm absolute z-20  top-[45%] bottom-[45%] -right-1   p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowForward color="white" size={15} />
    </button>
  );
};
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`  bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-red-600 to-yellow-500  shadow-orange-500 shadow-md w-max rounded-sm absolute z-20 -left-1  top-[45%] bottom-[45%]  p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowBack color="white" size={15} />
    </button>
  );
};
export default function SlideProduct(props: ISliderProductProps) {
  const { data } = props;
  let settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dotsClass: "dots-slick-product",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {data.map((item: IProduct, index: number) => (
        <nav
          key={index}
          className="relative group/search rounded-md overflow-hidden"
        >
          <div className="w-[95%] flex flex-col  gap-3 mx-auto p-1 h-max shadow-md rounded mb-2 px-1 shadow-gray-400  overflow-hidden">
            <Link href={`/products/${item?.product_id}`}>
              <div className="w-full cursor-pointer  relative h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={process.env.NEXT_PUBLIC_BASE_URL + "/" + item?.images[0]}
                  alt=""
                />
                <IoSearchOutline
                  size={40}
                  className="bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]"
                />
              </div>
            </Link>
            <Link href={`/products/${item?.product_id}`}>
              {" "}
              <h3 className="leading-5 mt h-10 overflow-hidden cursor-pointer line-clamp-2">
                {item?.name}
              </h3>
            </Link>
            <span className="flex my-3  justify-between text-[#e44c4c] font-medium items-center text-sm">
              {item?.quantity > 0 && <p>
                {addDotToNumber(
                  String(item?.price - (item?.price * item?.discount) / 100)
                )}{" "}
                <span className="underline">đ</span>
              </p>}
              {Number(item?.discount) > 0 && item?.quantity > 0 && (
                <p className="text-gray-500  line-through  ">
                  {" "}
                  {addDotToNumber(String(item?.price))}đ
                </p>
              )}
              {item?.quantity == 0 && <span className="bg-[#ff2121] text-white p-1 text-xs rounded-md py-[2px]">Hết hàng</span>}
              <FaRegHeart className="mr-4" size={18} />
            </span>
            <span className="bg-[#36b056] text-white -rotate-45 absolute pb-1 -top-7 -left-9  text-center text-[11px] font-bold pt-12 w-max px-4 m-auto">
              Pre-order
            </span>
            {Number(item?.discount) > 0 && (
              <span
                className={`italic bg-[#ff2121] text-white px-2 py-1 absolute top-2 right-3 text-xs rounded font-medium `}
              >
                -{item?.discount}%
              </span>
            )}
          </div>
        </nav>
      ))}
    </Slider>
  );
}
