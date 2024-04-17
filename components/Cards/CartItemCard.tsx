import * as React from "react";

export interface ICartItemCartProps {}

export default function CartItemCart(props: ICartItemCartProps) {
  return (
    <div className="flex border-t-[1px] py-2 h-[130px] text-sm  justify-between items-center">
      <div className="flex gap-4 h-full items-center">
        <img
          className="w-[90px] h-full  object-cover"
          src="https://product.hstatic.net/200000462939/product/2023-12-07_19h59_29_b1447719367c46a9a42f92bf7a030606_medium.png"
          alt=""
        />
        <nav className="flex w-[500px] flex-col gap-1">
          <h3 className="w-[450px] font-medium  text-wrap">
            Date A Live IV - Tokisaki Kurumi - Coreful Figure - Shouakuma ver.,
            Renewal | Taito Figure
          </h3>
          <span className="flex gap-4">
            <p>Thanh toán toàn bộ</p>
            <p className="text-[#d70018]">490,000₫ </p>
            <p className="underline  line-through">490,000₫</p>
          </span>
        </nav>
        <nav className="flex flex-col gap-2">
          <div className="flex w-[100px] h-[35px] text-sm font-serif text-[20px]  border-[1px] ">
            <input className="  cursor-pointer flex justify-center items-center  w-1/3  h-full " type="button" value={"-"} />
            <input className="w-1/3 outline-none flex justify-center items-center text-center bg-transparent  h-full font-medium "  type="text" defaultValue={1} />
            <input className=" cursor-pointer flex justify-center items-center  w-1/3    h-full " type="button" value={"+"} />
          </div>
          <button className="border-b w-max mx-auto border-black px-1  hover:text-[#d70018] hover:border-[#d70018] font-medium leading-4 ">Xoá</button>
        </nav>
      </div>
      <p className="font-bold text-[#d70018]">490,000₫</p>
    </div>
  );
}
