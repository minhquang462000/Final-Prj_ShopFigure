'use client'
import CartHomePage from '@/components/Forms/CartHomePage';
import { ICart } from '@/interfaces';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';

export interface ICartPopupProps {
    cart: ICart
    accountId: string
}
export default function CartPopup(props: ICartPopupProps) {
    const { cart, accountId } = props
    let dataCart: any = cart
    if (cart === null) {
        dataCart = {
            items: []
        }
    }

    const totalCart = dataCart.items?.reduce((total: number, item: any) => total + item.quantity, 0)
    const [openCart, setOpenCart] = useState(false);
    const wrapperRefCart = useRef<HTMLDivElement>(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (
                wrapperRefCart.current &&
                !wrapperRefCart.current!.contains(event.target) &&
                openCart
            ) {
                setOpenCart(false);
            }

        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openCart, wrapperRefCart]);
    return (
        <div ref={wrapperRefCart} className="relative  border-2 w-full px-2 rounded-md border-white ">
            <button
                onClick={() => setOpenCart(!openCart)} className="flex items-center gap-2 h-full">
                <IoCartOutline className="" size={30} />
                <div className="absolute  text-[10px]  -top-1 left-6 bg-[#d70018] justify-center items-center  rounded-full font-bold min-w-5 h-5 flex  border-2 shadow-md shadow-black border-white">
                    {totalCart}
                </div>
                <span className="cursor-pointer">Giỏ hàng</span>
            </button>
            <div
                className={`w-4 h-4 shadow-md shadow-black  bg-white absolute top-12 z-10 ${!openCart && "hidden"}  right-14 rotate-45 
                }`}
            ></div>
            <div

                className={`absolute  gap-2  shadow-md shadow-black top-14 bg-white text-center z-20 -right-16 ${!openCart && "hidden"} text-black w-[400px] transition-opacity duration-500 
                }`}
            >
                {accountId ? <CartHomePage cart={cart} /> :
                    <p className='px-2 py-3'>
                        Bạn chưa có tài khoản
                        <Link href={'/auth/login'}>
                            <b className='hover:underline px-1'>Đăng nhập</b></Link> để xem đơn hàng</p>}
            </div>
        </div>
    );
}
