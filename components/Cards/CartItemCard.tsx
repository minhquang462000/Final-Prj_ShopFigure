'use client'
import { addDotToNumber } from "@/helpers/addDotToNumber";
import { IProduct } from "@/interfaces";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface ICartItemCartProps {
  data: any
  _id: number
}

export default function CardItemCart(props: ICartItemCartProps) {
  const { data, _id } = props
  const router = useRouter()
  const priceProduct = data?.product?.price - (data?.product?.price * data?.product?.discount) / 100
  const [changeQuantity, setChangeQuantity] = useState<number>(data?.quantity)


  const handleDeleteProduct = async (product_id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này?")
    if (confirm) {
      axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${_id}`, { quantity: -1, product_id })
        .then((res) => {
          router.refresh()
          toast.success('Đã xóa sản phẩm thành công')
        })
        .catch((e) => {
          toast.error(e.response.data.message)
        })
    }
  }
  useEffect(() => {
    if (changeQuantity < 1) {
      const confirm = window.confirm("Bạn có muốn xóa sản phẩm này?")
      if (confirm) {
        axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${_id}`, { quantity: -1, product_id: data?.productId })
          .then((res) => {
            router.refresh()
          })
          .catch((e) => {
            toast.error(e.response.data.message)
          })
      }
    }
    const handleChangeQuantity = async () => {
      if (changeQuantity > 0) {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${_id}`, { quantity: changeQuantity })
          .then((res) => {
            router.refresh()
          })
          .catch((e) => {
            toast.error(e.response.data.message)
          })
      }
    }
    handleChangeQuantity()
  }, [changeQuantity])

  return (

    <div className="flex border-t-[1px] py-2 h-[130px] text-sm  justify-between items-center">
      <div className="flex gap-4 h-full items-center">
        <Link href={`/products/${data?.product.product_id}`}> <img
          className="w-[80px] h-[80px] border  object-cover"
          src={process.env.NEXT_PUBLIC_BASE_URL + "/" + data?.product?.images[0]}
          alt=""
        /></Link>
        <nav className="flex w-[500px] flex-col gap-1">
          <h3 className="w-[450px] line-clamp-2 font-medium hover:text-[#d70018] cursor-pointer   text-wrap">
            <Link href={`/products/${data?.product.product_id}`}>  {data?.product?.name}</Link>
          </h3>
          <span className="flex gap-4">
            <p>Thanh toán toàn bộ</p>
            <p className="text-[#d70018]">{addDotToNumber(priceProduct)}₫ </p>
            <p className=" line-through">{addDotToNumber(data?.product?.price)}₫</p>
          </span>
        </nav>
        <nav className="flex flex-col gap-2">
          <div className="flex w-[100px] h-[35px] text-sm font-serif text-[20px]  border-[1px] ">
            <input onClick={() => setChangeQuantity(changeQuantity - 1)} className=" cursor-pointer flex justify-center items-center  w-1/3  h-full " type="button" value={"-"} />
            <input onChange={(e) => setChangeQuantity(Number(e.target.value))} className="w-1/3 outline-none flex justify-center items-center text-center bg-transparent  h-full font-medium " type="text" defaultValue={changeQuantity} />
            <input onClick={() => setChangeQuantity(changeQuantity + 1)} className=" cursor-pointer flex justify-center items-center  w-1/3    h-full " type="button" value={"+"} />
          </div>
          <button onClick={() => handleDeleteProduct(data?.product?.product_id)} className="border-b w-max mx-auto border-black px-1  hover:text-[#d70018] hover:border-[#d70018] font-medium leading-4 ">Xoá</button>
        </nav>
      </div>
      <p className="font-bold text-[#d70018]">{addDotToNumber(data?.quantity * priceProduct)}₫</p>
    </div>

  );
}
