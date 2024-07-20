import { addDotToNumber } from "@/helpers/addDotToNumber";
import { IProduct } from "@/interfaces";
import Link from "next/link";
import * as React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export interface ICardProductHomeProps {
    product: IProduct;
}

export default function CardSearchPage({ product }: ICardProductHomeProps) {
    return (
        <nav className="relative group/search rounded-md p-2  bg-white border-[1px] overflow-hidden">
            <div className="w-full flex flex-col  gap-2 mx-auto p-1 h-max  overflow-hidden">
                <Link href={`/products/${product?.product_id}`}>
                    <div className="w-[220px] cursor-pointer overflow-hidden m-auto relative h-[220px]">
                        <img
                            className="w-full h-full group-hover/search:scale-125 transition-all  duration-700 object-cover"
                            src={process.env.NEXT_PUBLIC_BASE_URL + "/" + product?.images[0]}
                            alt=""
                        />
                        <IoSearchOutline
                            size={40}
                            className="bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]"
                        />
                    </div>
                </Link>
                <Link href={`/products/${product?.product_id}`}>
                    {" "}
                    <h3 className="leading-5 h-10 overflow-hidden cursor-pointer line-clamp-2">
                        {product?.name}
                    </h3>
                </Link>
                <div className="flex  justify-between text-[#e44c4c] font-medium items-center text-sm">
                    <span className={`flex gap-4 items-center ${product.quantity === 0 && "hidden"}`}>
                        <p>
                            {addDotToNumber(
                                (product?.price - (product?.price * product?.discount) / 100)
                            )}{" "}
                            <span className="underline">đ</span>
                        </p>
                        <p className={`text-gray-500  line-through ${product?.discount > 0 && product?.quantity > 0 ? "block" : "hidden"} `}>
                            {" "}
                            {product?.price}  <span className="underline ">đ</span>
                        </p>
                    </span>
                    <span className={`bg-[#ff2121] text-white p-1 text-xs rounded-md py-[2px] ${product?.quantity == 0 || product?.quantity == null ? "block" : "hidden"}`}>Hết hàng</span>
                    <button> <FaRegHeart className="mr-4" size={18} /></button>
                </div>
                <span className="bg-[#20b648] text-white -rotate-45 absolute pb-1 -top-7 -left-9  text-center text-[11px] font-bold pt-12 w-max px-4 m-auto">
                    Pre-order
                </span>
                {Number(product?.discount) > 0 && (
                    <span
                        className={`italic bg-[#ff2121] text-white px-2 py-1 absolute top- right-3 text-xs rounded font-medium `}
                    >
                        -{product?.discount}%
                    </span>
                )}
            </div>
        </nav>
    );
}
