'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { SiBrandfolder, SiSteelseries } from "react-icons/si";

export interface IDashboardProps {}

export default function Dashboard() {
  // const _id = params.id
  // console.log("🚀 ~ file: DashBoard.tsx:Dashboard ~ params:", params);
  
  //   const [tabIndex, setTabIndex] = React.useState<number>(0);
  const pathName = usePathname();

  const active = "bg-[#333a48]";
  const cssButton = "flex items-center gap-2 p-3  rounded hover:bg-[#333a48]";
  return (
    <div className="w-full flex flex-col gap-2   py-5 bg-[#1c2434] min-h-screen">
      <Link href={`/admin/accountAdmin/1`}>
        {" "}
        <button className="flex text-2xl gap-2 mb-7 font-medium  px-5">
          <MdOutlineDashboard size={30} />
          <p className="">Admin</p>
        </button>
      </Link>
      <section className="flex gap-2 px-4  flex-col  border-t-[1px] pt-2">
        <button>
          <Link
            href={"/admin/users"}
            className={`${cssButton} ${pathName === "/admin/users" && active}`}
          >
            {" "}
            <FaCircleUser size={20} /> Tài Khoản
          </Link>
        </button>
        <button>
          <Link
            href={"/admin/product"}
            className={`${cssButton} ${
              pathName === "/admin/product" && active
            }`}
          >
            {" "}
            <FaProductHunt size={20} /> Sản Phẩm
          </Link>
        </button>
        <button>
          <Link
            href={"/admin/category"}
            className={`${cssButton} ${
              pathName === "/admin/category" && active
            }`}
          >
            {" "}
            <BiSolidCategory size={20} /> Thể Loại
          </Link>
        </button>
        <button>
          <Link
            href={"/admin/character"}
            className={`${cssButton} ${
              pathName === "/admin/character" && active
            }`}
          >
            {" "}
            <RiCharacterRecognitionFill size={20} /> Nhân Vật
          </Link>
        </button>
        <button>
          <Link
            href={"/admin/brand"}
            className={`${cssButton} ${pathName === "/admin/brand" && active}`}
          >
            {" "}
            <SiBrandfolder size={20} /> Thương Hiệu
          </Link>
        </button>
        <button>
          <Link
            href={"/admin/series"}
            className={`${cssButton} ${pathName === "/admin/series" && active}`}
          >
            {" "}
            <SiSteelseries size={20} /> Series
          </Link>
        </button>
      </section>
    </div>
  );
}
