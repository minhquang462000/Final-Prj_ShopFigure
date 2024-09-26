'use client'
import ComfirmPassHomePage from '@/components/Forms/ConfirmPassHomePage';
import LoginHomePage from '@/components/Forms/LoginHomePage';
import { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IUser } from '@/interfaces';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
export interface ILoginPoupHomeProps {
  accountId: string
}

export default function LoginPopupHeader({ accountId }: ILoginPoupHomeProps) {


  const [openLogin, setOpenLogin] = useState(false);
  const [openFogetAccount, setOpenFogetAccount] = useState(false);
  const wrapperRefLogin = useRef<HTMLDivElement>(null);


  const [dataAccoun, setDataAccoun] = useState({} as IUser)
  // accountId &&
  //   useEffect(() => {
  //     const fetchAccountData = async () => {
  //       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${accountId}`)
  //       setDataAccoun(res.data)

  //     }
  //     fetchAccountData()
  //   }, [])

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRefLogin.current &&
        !wrapperRefLogin.current!.contains(event.target) &&
        openLogin
      ) {
        setOpenLogin(false);
      }

    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLogin, wrapperRefLogin]);
  return (
    <div ref={wrapperRefLogin} className=" relative w-full ">
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
      <span
        className={`w-4 h-4  bg-white absolute top-12 z-10 shadow-md shadow-black   right-14 rotate-45 ${!openLogin && "hidden"
          }`}
      >
      </span>
      <div

        className={`absolute  gap-2  shadow-md shadow-black top-14 py-3 p-4 h-max w-max z-20  text-center bg-white  -right-16  text-black ${!openLogin && "hidden"
          }`}
      >
        {!accountId ?
          <section className='relative w-[450px] overflow-hidden h-[280px]  '>
            <div className={`absolute transition-all duration-500 w-full  top-0 ${!openFogetAccount ? "left-0" : "-left-[120%]"}`}> <LoginHomePage setOpen={setOpenFogetAccount} /></div>
            <div className={`absolute transition-all duration-500 w-full top-0 ${openFogetAccount ? "right-0" : "-right-[120%]"}`}>  <ComfirmPassHomePage setOpen={setOpenFogetAccount} /></div>
          </section> :
          <nav className='text-center w-[400px] p text-sm'>
            <h4 className=''>THÔNG TIN TÀI KHOẢN</h4>
            <div className='font-light flex flex-col gap-1 my-2 text-xs'>
              <p>Tên: <span className='font-bold ml-2'>{dataAccoun?.name}</span></p>
              <p>Email: <span className='font-bold ml-2'>{dataAccoun?.email}</span></p>
              <p>Số điện thoại: <span className='font-bold ml-2'>{dataAccoun?.phone}</span></p>
            </div>
            <div className='flex text-white text-xs font-medium gap-4'>
              <button className='bg-[#9b9b9b] hover:bg-white hover:text-[#9b9b9b] border-[#9b9b9b] border w-1/2 py-3 transition-all duration-500'><Link href={`/account`}> Xem chi tiết</Link></button>
              <button className='bg-[#9b9b9b] hover:bg-white hover:text-[#9b9b9b] border-[#9b9b9b] border w-1/2 py-3 transition-all duration-500'>Đằng xuất</button>
            </div>
          </nav>
        }
      </div>
    </div>
  );
}
