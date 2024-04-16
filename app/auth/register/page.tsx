"use client";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

export interface IpageProps {}

export default function page(props: IpageProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  return (
    <MainLayout>
      <main className="text-black text-xl  w-screen bg-gradient-to-r from-[#cdf2f9] to-[#6fe9ff] mx-auto">
        <div className="w-[1280px] pb-10 flex flex-col gap-10 mx-auto">
          <ul className="flex py-3 text-base gap-2 ">
            <li className="cursor-pointer">Trang chủ</li>
            <li className="cursor-pointer hover:text-[#d70018]">/ Tài khoản</li>
            <li className="cursor-pointer">/ Đăng ký</li>
          </ul>
          <nav className="bg-white flex flex-col pb-10 gap-5 mx-auto rounded-md group/item w-[900px] px-10 p-6">
            <h1 className="text-center text-[30px] font-medium">
              Tạo Tài Khoản
            </h1>
            <input
              className="outline-none bg-transparent border p-2"
              type="text"
              placeholder="Tên đăng nhập"
            />
            <input
              className="outline-none bg-transparent border p-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="outline-none bg-transparent border p-2"
              type="text"
              placeholder="Số điện thoại"
            />
            <div className="w-full flex justify-between p-2 border">
              <input
                className="outline-none w-[95%] bg-transparent"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="w-[5%]"
              >
                {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <div className="w-full flex justify-between p-2 border">
              <input
                className="outline-none w-[95%] bg-transparent"
                type={showPassword2 ? "text" : "password"}
                placeholder="Xác nhận lại mật khẩu"
              />
              <button
                onClick={() => setShowPassword2(!showPassword2)}
                className="w-[5%]"
              >
                {!showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <button className="w-max bg-black mx-auto text-white p-3 px-8 font-medium rounded">
              Đăng Ký
            </button>
            <button className="text-lg flex items-center justify-center gap-1 hover:text-[#d70018]">
              <TbArrowBackUp />
              Quay lại đăng nhập
            </button>
          </nav>
        </div>
      </main>
    </MainLayout>
  );
}
