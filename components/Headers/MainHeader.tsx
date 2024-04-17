import Image from "next/image";
import * as React from "react";
import { FaRegEye, FaRegEyeSlash, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export interface IAppProps {}

export default function MainHeader(props: IAppProps) {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openAddressShop, setOpenAddressShop] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapperRefAddress = React.useRef<HTMLDivElement>(null);
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
      
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLogin, wrapperRef, openAddressShop, wrapperRefAddress]);

  return (
    <header className="w-screen sha relative py-2 bg-gradient-to-t from-red-700 to-orange-500">
      <nav className="w-[1280px] mx-auto flex gap-6 justify-between items-center">
        <div className="w-[250px]">
          {" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={150} height={30} />
        </div>
        <section className="flex items-center gap-2 bg-white  justify-between  rounded-md border-2 w-[500px]  border-white">
          <input
            className="outline-none bg-transparent placeholder:text-black px-2 text-black"
            placeholder="Bạn đang tìm gì ??"
            type="text"
          />
          <IoMdSearch className="bg-gradient-to-r from-red-600 to-orange-500 text-[30px] rounded-md py-1 w-[70px] " />
        </section>
        <ul className="grid grid-cols-5 leading-5 font-medium  text-sm  gap-5 text-wrap">
          <li className="flex items-center gap-2 w-full cursor-pointer ">
            <FiPhoneCall size={30} />
            <span>Hotline 0867030620</span>
          </li>
          <div   ref={wrapperRefAddress} className="w-full  relative ">
            <div
              onClick={() => setOpenAddressShop(!openAddressShop)}
              className="flex items-center cursor-pointer gap-2 "
            >
              <GrMapLocation size={30} />
              <span className="flex flex-wrap items-center ">
                <span>Hệ thống </span>
                <span>cửa hàng</span> <IoIosArrowDown size={15} />
              </span>
            </div>
            <div
              className={`w-4 h-4  bg-white absolute top-12 z-30   right-14 rotate-45 ${
                !openAddressShop && "hidden"
              }`}
            ></div>
            <div
            
              className={`absolute  gap-2 p-4 py-2 shadow-lg shadow-black top-14 bg-white text-center z-20 -right-16  text-black w-[450px] transition-opacity duration-500 ${
                !openAddressShop && "hidden"
              }`}
            >
              <h2 className="text-lg">TÌM CỬA HÀNG GẦN BẠN</h2>
              <nav>
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
              </nav>
            </div>
          </div>
          <div   ref={wrapperRef} className=" relative w-full">
            <div
              onClick={() => setOpenLogin(!openLogin)}
              className="flex items-center   gap-2  w-full cursor-pointer "
            >
              <FaRegUser size={30} />
              <span className="flex flex-wrap items-center  ">
                Đăng nhập<span>Đăng ký </span>
                <IoIosArrowDown size={15} />
              </span>
            </div>
            <div
              className={`w-4 h-4  bg-white absolute top-12 z-30   right-14 rotate-45 ${
                !openLogin && "hidden"
              }`}
            ></div>
            <div
            
              className={`absolute  gap-2 p-4 py-2 shadow-lg shadow-black top-14 bg-white text-center z-20 -right-16  text-black w-[450px] transition-opacity duration-500 ${
                !openLogin && "hidden"
              }`}
            >
              <h2 className="text-lg">ĐĂNG NHẬP TÀI KHOẢN</h2>
              <h3 className="mb-3">Nhập email và tài khoản của bạn</h3>
              <input
                className="border mb-3 p-2 outline-none w-full bg-transparent"
                type="email"
                placeholder="Email"
              />
              <div className="w-full mb-3 flex justify-between p-2 border">
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
              <button className="bg-black text-white mb-3 w-full p-3 text-xs font-medium rounded">
                ĐĂNG NHẬP
              </button>
              <nav className="text-start mb-1">
                <p>
                  Khách hàng mới?
                  <button className="font-bold ml-1">Tạo tài khoản</button>
                </p>
              </nav>
              <nav className="text-start mb-3">
                <p>
                  Quên mật khẩu?
                  <button className="font-bold ml-1">Khôi phục mật khẩu</button>
                </p>
              </nav>
            </div>
          </div>
          <li className="flex items-center relative gap-4 w-full cursor-pointer ">
            <FaRegHeart size={30} />
            <div className="absolute text-xs pb-[2px] -top-1 left-4 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
              0
            </div>
            <span>Sản phẩm yêu thích</span>
          </li>
          <li className="flex items-center relative  border-2 cursor-pointer h-full px-2 rounded-md border-white gap-2 w-full ">
            <IoCartOutline size={30} />
            <div className="absolute text-xs pb-[2px] -top-1 left-6 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
              0
            </div>
            <span>Giỏ hàng</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
