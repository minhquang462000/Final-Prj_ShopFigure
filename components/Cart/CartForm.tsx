'use client'
import * as React from 'react';
import CartItemCart from '../Cards/CartItemCard';
import { ICart, IProduct } from '@/interfaces';
import { TbArrowBackUp } from 'react-icons/tb';
import { addDotToNumber } from '@/helpers/addDotToNumber';

export interface ICartFormProps {
    dataCart: ICart
}

export default function CartForm(props: ICartFormProps) {
    const { dataCart } = props
    const totalPrice = dataCart.items?.reduce((total: number, item: any) => total + (item.product.price - (item.product.price * item.product.discount) / 100) * item.quantity, 0)
    const totalCart = dataCart.items?.reduce((total: number, item: any) => total + item.quantity, 0)
    const dataRender = dataCart.items || []

    return (
        <main className="w-[1280px] mt-[100px] grid grid-cols-4 gap-4  mb-8 text-black mx-auto">
            <ul className="flex py-3 col-span-4  gap-2 ">
                <li className="cursor-pointer">Trang chủ</li>
                <li className="cursor-pointer">/ Giỏ hàng</li>
            </ul>
            <section className="col-span-3 flex flex-col gap-4 w-full">
                <div className="bg-white p-4 w-full" >
                    <nav className="flex   py-3 justify-between items-center">
                        <h5 className=" text-xl  font-bold">Giỏ hàng:</h5>
                        <p className="text-sm border-b-[1px] font-medium  border-black">{totalCart} Sản phẩm</p>
                    </nav>
                    <div className="flex flex-col gap-3">
                        {dataRender?.map((item: any, index: number) => (
                            <CartItemCart key={index} data={item} _id={dataCart.cart_id} />
                        ))}

                    </div>
                </div>
            </section>
            <div className="col-span-1 flex flex-col gap-4  bg-white p-4">
                <h1 className="text-2xl  font-medium">Thông tin đơn hàng</h1>
                <nav className="flex border-y-[1px] items-center py-3 justify-between font-medium text-xl">
                    <h2>Tổng tiền:</h2>
                    <p className="text-2xl text-[#d70018]">{addDotToNumber(totalPrice)}đ</p>
                </nav>
                <nav className="flex mt-5 items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Xuất hoá đơn</label>
                </nav>
                <nav className="flex flex-col gap-3">
                    <label className="font-medium text-lg" htmlFor="">Ghi chú đơn hàng</label>
                    <textarea className="outline-none border p-2 w-full h-[100px]" name="" id="" placeholder="Ghi chú ..."></textarea>
                </nav>
                <input className="border p-2 outline-none bg-transparent" type="text" placeholder="Nhập mã khuyến mãi (nếu có)" />
                <button className="bg-black text-white font-medium p-2  rounded">THANH TOÁN NGAY</button>
                <button className="flex items-center text-sm p-2 pb-4 hover:text-[#d70018] gap-2 mx-auto w-max"><TbArrowBackUp />Tiếp tục mua hàng</button>
            </div>
        </main>
    );
}
