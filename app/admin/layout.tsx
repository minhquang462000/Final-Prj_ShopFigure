
import AvatarAdmin from "@/components/Admin/AvatarAdmin";
import Dashboard from "@/components/Admin/DashBoard";
import { ILayout } from "@/interfaces";
import * as React from "react";
import { FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


export default function layout({ children }: Readonly<ILayout>) {
  return (
    <main className="w-screen  grid grid-cols-8">
      <Dashboard />
      <div className="text-black col-span-7 w-full">
        <nav className="bg-whiten shadow-md shadow-gray-400 p-4 px-10 w-full flex justify-between ">
          <div className="flex items-center  text-xl gap-2">
            <IoSearchOutline size={25} />
            <input
              className="outline-none bg-transparent "
              type="text"
              placeholder="Tìm kiếm..."
            />
          </div>
          <AvatarAdmin />
        </nav>
       
        <div className="p-4 py-2">{children}</div>
      </div>
    </main>
  );
}
