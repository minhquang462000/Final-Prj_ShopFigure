import { addDotToNumber } from '@/helpers/addDotToNumber';
import { IProduct } from '@/interfaces';
import Link from 'next/link';
import * as React from 'react';
import { FaRegHeart } from 'react-icons/fa';

export interface ICardSearchHeaderProps {
    product: IProduct

}

export default function CardSearchHeader({ product }: ICardSearchHeaderProps) {
    console.log("product", product.quantity);

    return (
        <div className='flex gap-3  text-sm'>
            <Link href={`/products/${product?.product_id}`}>
                <img
                    className="w-[110px]  h-[80px] object-cover"
                    src={process.env.NEXT_PUBLIC_BASE_URL + "/" + product?.images[0]}
                    alt=""
                /></Link>
            <div className='flex w-full flex-col gap-1'>
                <Link href={`/products/${product?.product_id}`}>
                    <p className='line-clamp-2 hover:text-[#e44c4c] transition-all duration-500 cursor-pointer'>
                        {product?.name}
                    </p>
                </Link>
                <div className="flex  justify-between text-[#e44c4c] font-medium items-center text-sm">
                    <span className={`flex gap-4 items-center ${product?.quantity == 0 && "hidden"}`}>
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
            </div>
        </div>
    );
}
