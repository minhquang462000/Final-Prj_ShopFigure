import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FaProductHunt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export interface IDashboardProps {}

export default function Dashboard(props: IDashboardProps) {
//   const [tabIndex, setTabIndex] = React.useState<number>(0);
  const pathName = usePathname();

  const active = "bg-[#333a48]";
  const cssButton = "flex items-center gap-2 p-3  rounded hover:bg-[#333a48]";
  return (
    <div className="w-full flex flex-col gap-2   py-5 bg-[#1c2434] min-h-screen">
      <button className="flex text-2xl gap-2 mb-7 font-medium  px-5">
        <MdOutlineDashboard size={30} />
        <p className="">Admin</p>
      </button>
      <section className="flex gap-2 px-4  flex-col  border-t-[1px] pt-2">
        <button >
          <Link
            href={"/admin/users"}
            className={`${cssButton} ${pathName === "/admin/users" && active}`}
          >
            {" "}
            <FaCircleUser size={20} /> Tài khoản 
          </Link>
        </button>
        <button >
          <Link
            href={"/admin/product"}
            className={`${cssButton} ${pathName === "/admin/product" && active}`}
          >
            {" "}
            <FaProductHunt size={20} /> Sản phẩm
          </Link>
        </button>
      </section>
    </div>
  );
}
