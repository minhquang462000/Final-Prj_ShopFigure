"use client";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { FaFacebookF, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showForgetTable, setShowForgetTable] = React.useState(false);
  return (
    <MainLayout>
      <main className="text-black text-xl  w-screen bg-gradient-to-r from-[#cdf2f9] to-[#6fe9ff] mx-auto">
        <div className="w-[1280px] pb-10 flex flex-col gap-10 mx-auto">
          <ul className="flex py-3 text-base gap-2 ">
            <li className="cursor-pointer">Trang chủ</li>
            <li className="cursor-pointer hover:text-[#d70018]">/ Tài khoản</li>
            <li className="cursor-pointer">/ Đăng nhập</li>
          </ul>
          {showForgetTable ? (
            <nav className="bg-white flex flex-col py-20 gap-5 mx-auto rounded-md group/item w-[900px] px-10 ">
              <h1 className="text-center text-[30px] font-medium">
                Phục hồi mật khẩu
              </h1>
              <p className="text-center">
                Nhập email đăng nhập của bạn để khôi phục mật khẩu về email này.
              </p>
              <input
                className="outline-none bg-transparent border p-2"
                type="text"
                placeholder="Email"
              />
              <button className="w-max bg-black mx-auto text-white p-3 px-10 font-medium rounded">
                Gửi
              </button>
              <button onClick={() => setShowForgetTable(false)} className="hover:text-[#d70018]">Huỷ</button>
            </nav>
          ) : (
            <nav className="bg-white flex flex-col pb-10 gap-5 mx-auto rounded-md group/item w-[900px] px-10 p-6">
              <h1 className="text-center text-[30px] font-medium">Đăng nhập</h1>
              <input
                className="outline-none bg-transparent border p-2"
                type="text"
                placeholder="Email"
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

              <button className="w-max bg-black mx-auto text-white p-3 px-8 font-medium rounded">
                Đăng Nhập
              </button>
              <div className="flex justify-between gap-2">
                <button className="flex items-center gap-2 text-white w-1/2 justify-center p-3 rounded-md bg-[#cf4332]">
                  <FaGoogle />
                  Đăng nhập bằng Google
                </button>
                <button className="flex items-center gap-2 text-white w-1/2 justify-center p-3 rounded-md bg-[#4064ac]">
                  {" "}
                  <FaFacebookF />
                  Đăng nhập bằng Facebook
                </button>
              </div>
              <nav className="text-center text-wrap w-[150px] mx-auto text-base">
                <button onClick={() => setShowForgetTable(true)} className="hover:text-[#d70018]">Quên mật khẩu?</button>{" "}
                hoặc <button className="hover:text-[#d70018]">Đăng ký</button>
              </nav>
            </nav>
          )}
        </div>
      </main>
    </MainLayout>
  );
}
