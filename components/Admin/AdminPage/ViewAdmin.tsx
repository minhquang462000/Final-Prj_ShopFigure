'use client'
import { IUser } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { CiImageOff } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaUserEdit } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

export interface IViewAdminProps {
    data:IUser,
  
}

export default function ViewAdmin (props: IViewAdminProps) {
    const {data} = props
    const router = useRouter()
    React.useEffect(() => {
     router.refresh()
    }, [])
  return (
    <div className="w-full flex  text-black flex-col gap-10 px-10 ">
    <h2 className="font-bold">Thông Tin Cá Nhân</h2>
    <nav className="border w-max m-auto rounded-lg pb-10 shadow-md shadow-gray-400">
      <div className="w-full h-[480px] mb-8 relative">
        <Image
          src={"/images/cover-01.png"}
          className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          width={970}
          height={260}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="profile"
        />
        
        <nav className="absolute flex flex-col gap-2 items-center top-3/4 left-1/2 -translate-x-1/2 border-opacity-50    -translate-y-1/2">
          <div className="w-[150px] h-[150px] object-cover rounded-full overflow-hidden bg-gray-300 object-center shadow-md shadow-gray-500">
            {data?.avatar == null ? <div className="w-full h-full text-white flex items-center justify-center"><CiImageOff size={80} /></div> : <img
              className="w-full h-full  object-cover object-center"
              src={process.env.NEXT_PUBLIC_BASE_URL +"/"+ data?.avatar}
              alt=""
            />}
          </div>
          <span className="text-center pb-8 font-medium">
            <p>Tên: {data?.name}</p>
            <p> {data?.role === 0 ? "Admin" : ""}</p>
            <p>Email: {data?.email}</p>
            <p>SĐT: {data?.phone}</p>
            <p>Địa Chỉ: {data?.address}</p>
          </span>
        </nav>
      <Link href={`/admin/users/update/${data?.user_id}`}>
      <button  className="bg-blue-600 flex items-center gap-1 rounded-md w-max px-3 py-1 font-bold absolute text-sm text-white right-4 bottom-[45%]">
        <FaUserEdit/> Edit
          </button>
      </Link>
      </div>
      <nav className="text-center font-bold flex flex-col gap-5 text-xs">
        <div className="flex items-center w-max m-auto  border border-gray-500 justify-center '">
          <span className="min-w-[100px]  justify-center items-center flex  gap-1  px-2 py-1">
            460K<p className="font-light">Follower</p>
          </span>
          <span className="min-w-[100px]  justify-center items-center flex  gap-1 border-x border-gray-500  px-2 py-1">
            460K<p className="font-light">Following</p>
          </span>
          <span className="min-w-[100px]  justify-center items-center flex  gap-1  px-2 py-1">
            460<p className="font-light">Post</p>
          </span>
        </div>
        <p>Follow Me On</p>
        <div className="flex gap-4 justify-center items-center">
          <FaFacebookSquare className="hover:text-blue-800 cursor-pointer text-xl" />
          <FaTwitter className="hover:text-blue-800 cursor-pointer text-xl" />
          <FaInstagramSquare className="hover:text-blue-800 cursor-pointer text-xl" />
          <IoLogoGithub className="hover:text-blue-800 cursor-pointer text-xl" />
        </div>
      </nav>
    </nav>
  </div>
  );
}
