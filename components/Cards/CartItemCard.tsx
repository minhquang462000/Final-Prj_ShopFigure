'use client'
import { addDotToNumber } from "@/helpers/addDotToNumber";
import { IProduct } from "@/interfaces";
import { useState, useEffect } from "react";

export interface ICartItemCartProps {
  data: IProduct
  count: string[]

}

export default function CartItemCart(props: ICartItemCartProps) {


  const { data, count } = props
  const priceDiscount = data?.price - (data?.price * data?.discount) / 100


  const arrCount = count.map((item) => {
    return JSON.parse(item.replace(/&/g, ","))
  })
  const numberCount = arrCount.find((item) => item.product == data?.product_id)?.count
  const [countProduct, setCountProduct] = useState(numberCount)
  const handleChangeCount = (value: number) => {
    if (value > 0) {
      setCountProduct(value)
    }
  
  }
  const handleDelete = () => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm khỏi Cart?");
    if (confirm == false) {
      return;
    }
  }



  return (

    <div className="flex border-t-[1px] py-2 h-[130px] text-sm  justify-between items-center">
      <div className="flex gap-4 h-full items-center">
        <img
          className="w-[90px] h-full  object-cover"
          src={process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.images[0]}
          alt=""
        />
        <nav className="flex w-[500px] flex-col gap-1">
          <h3 className="w-[450px] font-medium  text-wrap">
           {data?.name}
          </h3>
          <span className="flex gap-4">
            <p>Thanh toán toàn bộ</p>
            <p className="text-[#d70018]">{addDotToNumber(String(priceDiscount))}₫ </p>
            <p className=" line-through">{addDotToNumber(String(data?.price))}₫</p>
          </span>
        </nav>
        <nav className="flex flex-col gap-2">
          <div className="flex w-[100px] h-[35px] text-sm font-serif text-[20px]  border-[1px] ">
            <input onClick={()=>handleChangeCount(countProduct - 1)}  className=" cursor-pointer flex justify-center items-center  w-1/3  h-full " type="button" value={"-"} />
            <input onChange={(e) => handleChangeCount(Number(e.target.value))} className="w-1/3 outline-none flex justify-center items-center text-center bg-transparent  h-full font-medium " type="text" defaultValue={countProduct} />
            <input onClick={() => handleChangeCount(countProduct + 1)} className=" cursor-pointer flex justify-center items-center  w-1/3    h-full " type="button" value={"+"} />
          </div>
          <button onClick={handleDelete} className="border-b w-max mx-auto border-black px-1  hover:text-[#d70018] hover:border-[#d70018] font-medium leading-4 ">Xoá</button>
        </nav>
      </div>
      <p className="font-bold text-[#d70018]">{ addDotToNumber(String(priceDiscount * countProduct))}₫</p>
    </div>

    );
}
