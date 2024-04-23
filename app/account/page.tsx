"use client";
import FormAddressDelivery from "@/components/Forms/FormAddressDelivery";
import FormInfoAccount from "@/components/Forms/FormInfoAccount";
import FormYourOrder from "@/components/Forms/FormYourOrder";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { RiBox1Fill } from "react-icons/ri";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [tabIndex, setTabIndex] = React.useState<number>(2);
  const renderByTabIndex = () => {
    switch (tabIndex) {
      case 0:
        return <FormInfoAccount />;
      case 1:
        return <FormYourOrder/>
      case 2:
        return <FormAddressDelivery />;
      default:
        return null;
    }
  };
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
          <button onClick={() => setTabIndex(0)} className={`flex items-center mx-4  p-[6px]  font-medium hover:text-white hover:bg-[#d62828] ${tabIndex === 0 ? "text-white bg-[#d62828] " : "bg-[#eaeaea] group/item"}  rounded-full gap-3`}>
            <FaUser className={`bg-white  p-2 ${tabIndex === 0 ? "text-[#d62828]" : "text-[#eaeaea] group-hover/item:text-[#d62828] "} text-[35px] rounded-full`} />
            <p>Thông tin cá nhân</p>
          </button>
          <button onClick={() => setTabIndex(1)} className={`flex items-center mx-4  p-[6px]  font-medium hover:text-white hover:bg-[#d62828] ${tabIndex === 1 ? "text-white bg-[#d62828] " : "bg-[#eaeaea] group/item"}  rounded-full gap-3`}>
            <RiBox1Fill className={`bg-white  p-2 ${tabIndex === 1 ? "text-[#d62828]" : "text-[#eaeaea] group-hover/item:text-[#d62828] "} text-[35px] rounded-full`} />
            <p>Đơn hàng của bạn</p>
          </button>
          <button onClick={() => setTabIndex(2)} className={`flex items-center mx-4  p-[6px]  font-medium hover:text-white hover:bg-[#d62828] ${tabIndex === 2 ? "text-white bg-[#d62828] " : "bg-[#eaeaea] group/item"}  rounded-full gap-3`}>
            <FaHome className={`bg-white  p-2 ${tabIndex === 2 ? "text-[#d62828]" : "text-[#eaeaea] group-hover/item:text-[#d62828] "} text-[35px] rounded-full`} />
            <p>Địa chỉ giao hàng</p>
          </button>
        </section>
        <section className="col-span-3 ">
         {renderByTabIndex()}
        </section>
      </main>
    </MainLayout>
  );
}
