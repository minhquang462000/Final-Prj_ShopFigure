"use client";
import SlideItem from "@/components/Slide/SlideItem";
import { addDotToNumber } from "@/helpers/addDotToNumber";
import { ICategory, IProduct } from "@/interfaces";
import moment from "moment";
import Link from "next/link";
import * as React from "react";
import { CiLogout } from "react-icons/ci";
import { FaStar, FaUserEdit } from "react-icons/fa";

export interface IpageProps {
    data:IProduct
}

export default function ViewDetailProduct(props: IpageProps) {
    const formatDateTime = (dateTime: any) => {
        return moment(dateTime).format("DD/MM/YYYY HH:mm:ss A");
    };
    
    const {data} = props;
    // console.log("🚀 ~ file: ViewDetailProduct.tsx:ViewDetailProduct ~ formatPrice:", data.price.length);
    // console.log("🚀 ~ file: ViewDetailProduct.tsx:ViewDetailProduct ~ data:", data);
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 border border-gray-400 rounded-lg shadow-md shadow-gray-600  lg:grid-cols-5 gap-1  px-6">
          <div className="lg:col-span-3 w-full scale-75  lg:sticky top-0 text-center">
            <SlideItem  images={data?.images}/>
          </div>
          <div className="lg:col-span-2  flex flex-col gap-3">
            <h2 className="text-xl  font-extrabold text-[#333]">
            {data?.name}
            </h2>
            <div className="flex items-end gap-4">
              <p className="text-[#333] text-3xl font-bold">{addDotToNumber(data?.price)}đ</p>
              <p className="font-medium text-xl text-[#707070]">
                {addDotToNumber(data?.price)}đ
              </p>{" "}
              <span className="text-xs bg-red-600 px-2 h-max py-[2px] rounded-md text-white italic font-light ml-1">
                {data?.discount ===null ? "0%" : data?.discount + "%"}
              </span>
            </div>
            <nav className="flex gap-2">
              <span
                className={`${data?.quantity ===0 ? "bg-red-500" : "bg-green-500"} text-white px-2 w-max font-bold text-xs py-1 rounded`}
              >
              {data?.quantity ===0 ? "Hết hàng" : "Còn hàng"}
              </span>
              <span
                className={` text-white px-2 w-max ${data?.status == 0 ? "bg-red-500" : "bg-green-500"} font-bold text-xs py-1 rounded`}
              >
              {data?.status === 1 ? "Đang bán" : "Ngừng bán"}
              </span>
            </nav>
            <nav className=" flex gap-4">
              <h3 className=" font-bold  text-gray-800">Số lượng:</h3>
              <p>{data?.quantity}</p>
            </nav>
            <div className="flex  gap-5  ">
              <nav className="flex gap-2 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </nav>
              <h4 className="text-[#333] underline text-base">500 Reviews</h4>
            </div>
            <nav className="">
              <h3 className=" font-bold  text-gray-800">Thông Tin Mô Tả</h3>
              <p className="line-clamp-4 max-h-[200px] over">
                {data?.description}
              </p>
            </nav>
            <nav className="flex items-end  gap-3">
              <h3 className=" font-bold  text-gray-800">Danh mục:</h3>
              <ul className="flex gap-2">
                {data?.categories?.map((item:ICategory,i:number) => (
                  <li
                    key={i}
                    className="text-sm p-1 border border-gray-400 rounded-md">
                    {item?.name}
                  </li>
                ))}
              </ul>
            </nav>
            <section className="flex gap-3 ">
              <Link href={`/admin/product/update/${data?.product_id}`}>
                <button className="hover:bg-yellow-600 hover:text-white border-2 border-yellow-600 text-yellow-600 flex items-center font-bold gap-2 text-xs px-2 py-1 rounded">
                  <FaUserEdit size={20} /> Sửa Đổi
                </button>
              </Link>
              <Link href="/admin/product">
                <button className="hover:bg-red-600 hover:text-white border-2 border-red-600 text-red-600 flex items-center font-bold gap-2 text-xs px-2 py-1 rounded">
                  <CiLogout size={20} />
                  Trở Về{" "}
                </button>
              </Link>
            </section>
          </div>
        </div>
       <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg border-b-[1px]  border-gray-300 pb-2 font-bold text-[#333]">
            Thông Tin Chi Tiết Sản Phẩm
          </h3>
          <ul className="mt-4 space-y-3 font-medium text-sm text-[#333]">
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Tên Sản Phẩm: </p>
              <span className="ml-4 ">
               {data?.name}
              </span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Series (anime) :</p>

              <span className="ml-4 ">{data?.series?.name}</span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Nhân Vật :</p>
              <span className="ml-4 ">{data?.brand?.name}</span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Thể Loại :</p>
              <span className="ml-4 ">Game Prize</span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Thương Hiệu :</p>{" "}
              <span className="ml-4 ">{data?.brand?.name}</span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Tình Trạng :</p>{" "}
              <span className="ml-4 ">{data?.quantity >0 ? "Còn hàng" : "Hết hàng"}{`(${data?.quantity})`}</span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Trạng Thái: :</p>{" "}
              <span className="ml-4 ">{data?.quantity >0 ? "Đang bán" : "Ngừng Bán"}</span>
            </li>

            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Đặc Điểm :</p>
              <span className="ml-4 ">
               {data?.characteristics}
              </span>
            </li>
            <li className="border-b-[1px]  p-2 flex gap-10 border-gray-300">
              <p className="min-w-[120px] font-semibold"> Ngày Phát Hành :</p>{" "}
              <span className="ml-4 ">{formatDateTime(data?.created_at)}</span>
            </li>
          </ul>
        </div> 
        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">5.0</p>
                  {/* <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg> */}
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">4.0</p>
                  {/* <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg> */}
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">3.0</p>
                  {/* <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg> */}
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">2.0</p>
                  {/* <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg> */}
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">1.0</p>
                  {/* <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg> */}
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}