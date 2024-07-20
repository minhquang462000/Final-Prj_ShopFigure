'use client'
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import logoImg from "@/public/images/imglogo.png"
import CartPopup from "./Popup/CartPopup";
import ShopSystemPopup from "./Popup/ShopSystemPopup";
import { FaRegHeart } from "react-icons/fa";
import LoginPopupHeader from "./Popup/LoginPopupHeader";
import SearchHearder from "./Popup/SearchHeader";
import { ICart } from "@/interfaces";
import { useEffect, useState } from "react";
import HeaderSelect from "./HeaderSelect";
import { useRouter } from "next/navigation";
export interface IAppProps {
  cart: ICart
  accountId: any
}

export default function MainHeader({ cart, accountId }: IAppProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [countLikeList, setCountLikeList] = useState(0)
  let lastScroll = 0
  const router = useRouter()

  useEffect(() => {
    const likeList = JSON.parse(localStorage.getItem("likeList") || "[]")
    setCountLikeList(likeList.length || 0)
  }, [countLikeList])
  useEffect(() => {

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={`w-screen z-50 ${showHeader ? " top-0" : "hidden"} fixed  `}>
      <div className="w-full   bg-gradient-to-t from-red-700 to-orange-500 py-2 text-xs  ">
        <div className="w-[1280px]  relative mx-auto flex gap-6 justify-between items-center">
          <Link className="w-[15%]" href={"/"}>
            <div className="w-full clear-start flex border overflow-hidden   rounded-xl items-center gap-3 h-full">
              {" "}
              <img src={logoImg.src} className="h-[40px] bg-white" alt="" />
              <p className="font-bold ">Dragon Shop</p>
            </div>
          </Link>
          <SearchHearder />
          <ul className="grid grid-cols-5 leading-5 w-1/2 text-sm  gap-5 text-wrap">
            <li className="flex items-center w-full gap-2  cursor-pointer ">
              <FiPhoneCall className="w-[30%]" size={30} />
              <span className="text-wrap w-[70%] ">Hotline <p className="text-xs"> 0867030620</p></span>
            </li>

            <li><ShopSystemPopup /></li>
            <li><LoginPopupHeader accountId={accountId} /></li>
            <li className="flex items-center relative gap-4 w-full cursor-pointer ">
              <FaRegHeart size={30} />
              <div className="absolute text-[10px]  -top-0 left-3 bg-[#d70018] justify-center items-center  rounded-full font-bold w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
                {countLikeList}
              </div>
              <span>Sản phẩm yêu thích</span>
            </li>
            <li> <CartPopup cart={cart} accountId={accountId} /></li>
          </ul>
        </div>
      </div>
      <HeaderSelect />
    </header>
  );
}
