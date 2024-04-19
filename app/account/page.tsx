"use client";
import FormInfoAccount from "@/components/Forms/FormInfoAccount";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { RiBox1Fill } from "react-icons/ri";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-[1280px] grid grid-cols-4 gap-8  mb-8 text-black mx-auto">
        <ul className="flex py-3 col-span-4  gap-2 ">
          <li className="cursor-pointer">Trang chủ</li>
          <li className="cursor-pointer">/ Tài khoản</li>
        </ul>
        <section className="col-span-1 w-full flex flex-col gap-5 bg-white rounded-lg py-5 ">
          <nav className="flex w-full text-sm overflow-hidden items-center gap-2 justify-between p-4 pt-0 border-b-[1px] ">
            <div className="p-4 text-xs text-white flex items-center justify-center font-bold bg-[#edb500] rounded-full">QN</div>
            <span className="w-full ">
              <p className="w-[200px] truncate font-medium">nmquang</p>
              <p className="w-[200px]  text-gray-500 truncate">nguyenminhquang.cd2017@gmail.com</p>
            </span>
          </nav>
          <button className="flex items-center mx-4 bg-[#eaeaea] p-2 py-1 font-medium hover:text-white hover:bg-[#d62828] group/item rounded-full gap-3">
            <FaUser className="bg-white p-2 text-[#eaeaea] group-hover/item:text-[#d62828] text-[35px] rounded-full" />
            <p>Thông tin cá nhân</p>
          </button>
          <button className="flex items-center mx-4 bg-[#eaeaea] p-2 py-1 font-medium hover:text-white hover:bg-[#d62828] group/item rounded-full gap-3 ">
            <RiBox1Fill className="bg-white text-[#eaeaea] group-hover/item:text-[#d62828] p-2 text-[35px] rounded-full" />
            <p>Đơn hàng của bạn</p>
          </button>
          <button className="flex items-center mx-4 bg-[#eaeaea] p-2 py-1 font-medium hover:text-white  group/item  hover:bg-[#d62828]  rounded-full gap-3 ">
            <FaHome className="bg-white p-2 text-[#eaeaea] text-[35px] group-hover/item:text-[#d62828] rounded-full" />
            <p>Địa chỉ giao hàng</p>
          </button>
        </section>
        <section className="col-span-3 bg-white p-4 rounded-xl">
         <FormInfoAccount/>
        </section>
      </main>
    </MainLayout>
  );
}
