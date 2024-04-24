'use client'
import ListSelectCategory from "@/components/List/ListSelectCategory";
import ListSelectPrice from "@/components/List/ListSelectPrice";
import { ILayout } from "@/interfaces";
import MainLayout from "@/layouts/main";
import { FiMinus } from "react-icons/fi";


export default function layout({ children }: Readonly<ILayout>) {
    
    return (
    <MainLayout>
          <main className="w-screen">
        <section className="w-[1280px] grid grid-cols-4 mt-5 gap-5 mx-auto">
         <tr className="text-black col-span-1 flex flex-col gap-3 w-full">
            <td className=" rounded w-full flex flex-col bg-white p-3">
           <span className="border-b-[1px] pb-2 justify-between items-center flex w-full"> 
            <h3 className="font-medium" >Đặt hàng</h3>
            <FiMinus />
            </span>
            <nav className="flex gap-2 flex-wrap py-2">
                <button className="border-[1px] p-2 py-1 rounded-md text-sm hover:bg-black hover:text-white">Pre-Order</button>
                <button className="border-[1px] p-2 py-1 rounded-md text-sm hover:bg-black hover:text-white">Order</button>
                
            </nav>
            </td>
            <ListSelectCategory/>
            <ListSelectPrice/>
            <ListSelectCategory/>
         </tr>
            <div className="col-span-3 "> {children}</div>
        </section>
      </main>
    </MainLayout>
    );
  }
  