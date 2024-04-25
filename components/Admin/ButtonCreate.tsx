import Link from "next/link";
import * as React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export interface IButtonCreateProps {
  title: string;
  urlLink: string;
}

export default function ButtonCreate(props: IButtonCreateProps) {
  const { title, urlLink } = props;
  return (
    <div className="p-4 flex justify-between font-medium items-center w-full ">
      <h1 className="text-xl  underline">{title}</h1>
      <div className="flex gap-2">
        <button className="w-max flex items-center text-red-500   gap-2 border-red-500 hover:text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500  rounded-xl p-2 border   ">
          <MdDeleteOutline />
          Xóa
        </button>
        <Link href={urlLink}>
          {" "}
          <button className="w-max flex items-center    gap-2 border-gray-600 hover:text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500  rounded-xl p-2 border   ">
            <FaPlus />
            Thêm mới
          </button>
        </Link>
      </div>
    </div>
  );
}
