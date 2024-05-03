'use client';
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { IUser } from "@/interfaces";

export interface IAvatarAdminProps { }

export default function AvatarAdmin(props: IAvatarAdminProps) {
  const [showOption, setShowOption] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({} as IUser);
  

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !wrapperRef.current!.contains(event.target) &&
        showOption
      ) {
        setShowOption(false);
      }


    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOption, wrapperRef]);
  return (
    <div

      className="flex gap-3 cursor-pointer items-center  relative">
      <span className="text-end text-lg font-medium">
        <p>Nguyễn Minh Quang</p>
        <p>Admin</p>
      </span>
      <img
        className="w-[50px] h-[50px] object-cover rounded-full"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/2d5247173291955.Y3JvcCwxMDgwLDg0NCwwLDU5MA.png"
        alt=""
      />
      <button className="text-2xl"
        onClick={() => setShowOption(!showOption)}  >

        {" "}
        {showOption ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}

      </button>
      <div ref={wrapperRef} className={` text-start ${!showOption && "hidden"} flex flex-col gap-3 absolute top-14 shadow shadow-gray-400 bg-white right-0   text-base border border-black rounded-lg px-8 py-3`}>
        <Link href={'/'}> <button className="hover:text-[#29b6fe] hover:underline flex items-center gap-2">  <FaHome />Trở về trang chủ</button></Link>

        <Link href={'/auth/login'}><button className="hover:text-[#29b6fe] hover:underline flex items-center gap-2"><CiLogout /> Đăng xuất</button></Link>
      </div>

    </div>
  );
}
