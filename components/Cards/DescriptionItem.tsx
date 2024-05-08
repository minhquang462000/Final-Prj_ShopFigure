'use client'
import { IProduct } from "@/interfaces";
import * as React from "react";
import { FaPlusCircle } from "react-icons/fa";

export interface IDescriptionItemProps {
  data:IProduct
 }

export default function DescriptionItem(props: IDescriptionItemProps) {
  const {data} = props
  const [showAllDescription, setShowAllDescription] = React.useState(false);
  return (
    <div className={`col-span-3 rounded-md flex flex-col justify-between bg-white p-4 h-max `}>
      <nav className={` w-full mb-16 `}>
        <h2 className="text-xl  font-bold mb-6">MÔ TẢ SẢN PHẨM</h2>
        <h3 className="text-2xl font-medium mb-3 line-clamp-2">
         {data?.name}
        </h3>
        <span className={`overflow-hidden flex flex-col gap-3  ${!showAllDescription ? "h-[300px] " : "max-h-max"}`}>
       
          <p className={`${!showAllDescription && "line-clamp-3"}`}>
           {data?.description}
          </p>
          
          <p>
            Đừng bỏ lỡ cơ hội sở hữu mô hình độc đáo này. Mô hình này shop hỗ trợ <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">ship quốc tế</span>, khách hàng an tâm mua sắm với
             <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">chính sách giao hàng và đổi trả sản phẩm</span>. Nếu có câu hỏi về sản phẩm xin vui lòng inbox hoặc xem 
             <span className="px-1 text-[#26b9fe] cursor-pointer hover:text-[#ff5252]">câu hỏi thường gặp</span> để biết thêm chi tiết và đặt hàng ngay hôm nay!
          </p>
        </span>

      </nav>
      <button onClick={() => setShowAllDescription(!showAllDescription)} className="flex text-end py-2 w-full justify-center gap-2 items-center font-medium bg-gray-100 rounded-md">
        <FaPlusCircle />
        <p >{showAllDescription ? "Thu gọn" : "Xem thêm"}</p>
      </button>
    </div>
  );
}
