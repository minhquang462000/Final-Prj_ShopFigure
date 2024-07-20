
import { getCartByUser } from "@/api/cart";
import CartItemCart from "@/components/Cards/CartItemCard";
import CartForm from "@/components/Cart/CartForm";
import { IProduct } from "@/interfaces";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { ToastContainer } from "react-toastify";

export interface IpageProps { }

export default async function page(props: IpageProps) {
  const dataCart = await getCartByUser()
  return (
    <MainLayout>
      <ToastContainer autoClose={1000} />
      <CartForm dataCart={dataCart} />
    </MainLayout>
  );
}
