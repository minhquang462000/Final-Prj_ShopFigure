
import { ICart } from '@/interfaces';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import { addDotToNumber } from '@/helpers/addDotToNumber';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
export interface ICartHomePageProps {
  cart: ICart
}

export default function CartHomePage(props: ICartHomePageProps) {
  const { cart } = props
  let dataCart: any = cart
  if (cart === null) {
    dataCart = {
      items: []
    }
  }
  const itemsCart = dataCart.items
  const totalPrice = dataCart.items?.reduce((total: number, item: any) => total + (item.product.price - (item.product.price * item.product.discount) / 100) * item.quantity, 0)
  const router = useRouter()
  const handleDeleteProduct = async (product_id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này?")
    if (confirm) {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${cart.cart_id}`, { quantity: -1, product_id })
        .then((res) => {
          router.refresh()
          toast.success('Đã xóa sản phẩm thành công')
        })
        .catch((e) => {
          toast.error(e.response.data.message)
        })
    }
  }
  return (
    <div className='w-full  p-4 '>
      <h2 className='text-2xl font-normal mb-2'>Giỏ hàng</h2>
      {itemsCart.length > 0 ? <ul className='flex flex-col max-h-[250px] overflow-y-auto'>
        {itemsCart?.map((item: any, index: number) => (
          <li key={index} className='flex gap-4 text-start py-2 border-t-[1px] border-gray-400 border-dotted'>
            <Link className='w-1/4 h-[100px] overflow-hidden' href={`/products/${item.product.product_id}`}>
              <img className='w-full h-full object-cover' src={process.env.NEXT_PUBLIC_BASE_URL + "/" + item.product.images[0]} alt="" />
            </Link>
            <nav className='flex w-3/4 flex-col gap-2'>
              <Link href={`/products/${item.product.product_id}`}>  <h3 className='hover:text-[#d70018] h-[55px] line-clamp-3 overflow-hidden cursor-pointer'>{item.product.name}</h3></Link>
              <p className=' font-normal text-xs'>Thanh toán toàn bộ</p>
              <span className='flex items-center gap-2'>
                <span className='border-[1px] w-6 border-gray-400 h-6   flex justify-center items-center '>{item.quantity}</span>
                <p className=' text-[#d70018]'>{addDotToNumber((item.product.price - (item.product.price * item.product.discount) / 100))}₫</p>
              </span>
            </nav>
            <button onClick={() => handleDeleteProduct(item.product.product_id)} className='flex hover:text-[#d70018]  justify-start items-start'><IoClose size={20} className='font-bold' /></button>
          </li>
        ))}

      </ul> : <p className='text-center border-t-[1px] underline py-2 border-gray-400'>Bạn chưa có sản phẩm</p>}
      <nav className='flex flex-col gap-2'>
        <span className='flex justify-between items-center py-2'>
          <p>TỔNG TIỀN:</p>
          <p className='text-[#d70018] text-lg'>{addDotToNumber(totalPrice)}₫</p>
        </span>
        <div className='flex gap-4 text-xs font-medium justify-between'>
          <button className='bg-[#9b9b9b] hover:bg-white hover:text-[#9b9b9b] hover:border-[1px] border-[#9b9b9b] text-white py-3 w-1/2 '><Link href={'/cart'}>XEM GIỎ HÀNG</Link></button>
          <button className='border-[1px] hover:border-white hover:text-white  hover:bg-[#9b9b9b] border-[#9b9b9b] text-[#9b9b9b] py-3 w-1/2'>THANH TOÁN</button>
        </div>
      </nav>
    </div>
  );
}
