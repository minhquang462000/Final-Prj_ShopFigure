'use client'
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaHandPointLeft, FaRegEye, FaRegEyeSlash, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import LoginHomePage from "../Forms/LoginHomePage";
import ComfirmPassHomePage from "../Forms/ConfirmPassHomePage";
import CartHomePage from "../Forms/CartHomePage";
import logoImg from "@/public/images/imglogo.png"
export interface IAppProps { }

export default function MainHeader(props: IAppProps) {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openAddressShop, setOpenAddressShop] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapperRefAddress = React.useRef<HTMLDivElement>(null);
  
  const wrapperRefCart = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !wrapperRef.current!.contains(event.target) &&
        openLogin
      ) {
        setOpenLogin(false);
      }
      if (
        wrapperRefAddress.current &&
        !wrapperRefAddress.current!.contains(event.target) &&
        openAddressShop
      ) {
        setOpenAddressShop(false);
      }
      if (
        wrapperRefCart.current &&
        !wrapperRefCart.current!.contains(event.target) &&
        openCart
      ) {
        setOpenCart(false);
      }
    
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLogin, wrapperRef, openAddressShop, wrapperRefAddress, openCart, wrapperRefCart]);

  return (
    <header className="w-screen sha  py-2 z-50  sticky top-0  bg-gradient-to-t from-red-700 to-orange-500">
      <div className="w-[1280px] relative mx-auto flex gap-6 justify-between items-center">
       <Link href={"/"}>
       <div className="w-[250px] clear-start flex shadow-md shadow-gray-200 border overflow-hidden   rounded-xl items-center gap-3 h-full">
          {" "}
        <img src={logoImg.src} className="h-[50px] bg-white" alt="" />
        <p className="font-bold ">Dragon Shop</p>
        </div></Link>
        <div className="flex items-center gap-2 bg-white  justify-between  rounded-md border-2 w-[500px]  border-white">
          <input
            className="outline-none bg-transparent placeholder:text-black px-2 text-black"
            placeholder="Bạn đang tìm gì ??"
            type="text"
          />
          <IoMdSearch className="bg-gradient-to-r from-red-600 to-orange-500 text-[30px] rounded-md py-1 w-[70px] " />
        </div>
        <ul className="grid grid-cols-5 leading-5 font-medium  text-sm  gap-5 text-wrap">
          <li className="flex items-center gap-2 w-full cursor-pointer ">
            <FiPhoneCall size={30} />
            <span>Hotline 0867030620</span>
          </li>
          <div ref={wrapperRefAddress} className="w-full  relative ">
            <button
              onClick={() => setOpenAddressShop(!openAddressShop)}
              className="flex items-center  gap-2 "
            >
              <GrMapLocation size={30} />
              <span className="flex flex-wrap items-center ">
                <span>Hệ thống </span>
                <span>cửa hàng</span> <IoIosArrowDown size={15} />
              </span>
            </button>
            <div
              className={`w-4 h-4  bg-white absolute top-12 z-10 shadow-md shadow-black   right-14 rotate-45 ${!openAddressShop && "hidden"
                }`}
            ></div>
            <div

              className={`absolute  gap-2 p-4 py-2 shadow-sm shadow-black top-14 bg-white text-center z-20 -right-16  text-black w-[450px] transition-opacity duration-500 ${!openAddressShop && "hidden"
                }`}
            >
              <h2 className="text-lg">TÌM CỬA HÀNG GẦN BẠN</h2>
              <div>
                <input
                  type="text"
                  className="border mb-3 p-2 outline-none w-full bg-transparent"
                  placeholder=" Tỉnh hoặc thành phố"
                />
                <input
                  type="text"
                  className="border mb-3 p-2 outline-none w-full bg-transparent"
                  placeholder=" Quận hoặc huyện"
                />
              </div>
            </div>
          </div>
          <div ref={wrapperRef} className=" relative w-full">
            <button
              onClick={() => setOpenLogin(!openLogin)}
              className="flex items-center   gap-2  w-full"
            >
              <FaRegUser size={30} />
              <span className="flex flex-wrap items-center  ">
                Đăng nhập<span>Đăng ký </span>
                <IoIosArrowDown size={15} />
              </span>
            </button>
            <div
              className={`w-4 h-4  bg-white absolute top-12 z-10 shadow-md shadow-black   right-14 rotate-45 ${!openLogin && "hidden"
                }`}
            ></div>
            <div

              className={`absolute  gap-2 p-4 py-2 shadow-md shadow-black top-14 min-h-[280px] delay-300 bg-white text-center z-20 -right-16  text-black w-[450px] transition-opacity duration-500 ${!openLogin && "hidden"
                }`}
            >
              {
                !openConfirm ?<LoginHomePage setOpen={setOpenConfirm} />:<ComfirmPassHomePage setOpen={setOpenConfirm} />}
            </div>
          </div>
          <li className="flex items-center relative gap-4 w-full cursor-pointer ">
            <FaRegHeart size={30} />
            <div className="absolute text-xs pb-[2px] -top-1 left-4 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
              0
            </div>
            <span>Sản phẩm yêu thích</span>
          </li>
          <div ref={wrapperRefCart} className="relative  border-2 w-full px-2 rounded-md border-white ">
            <button
            onClick={() => setOpenCart(!openCart)} className="flex items-center gap-2 h-full">
              <IoCartOutline className="" size={30} />
            <div className="absolute  text-xs pb-[2px] -top-1 left-6 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
              0
            </div>
            <span className="cursor-pointer">Giỏ hàng</span>
            </button>
            <div
              className={`w-4 h-4 shadow-md shadow-black  bg-white absolute top-12 z-10 ${!openCart && "hidden"}  right-14 rotate-45 
                }`}
            ></div>
            <div

              className={`absolute  gap-2 p-4 py-2 shadow-md shadow-black top-14 bg-white text-center z-20 -right-16 ${!openCart && "hidden"} text-black w-[400px] transition-opacity duration-500 
                }`}
            >
             <CartHomePage/>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}
