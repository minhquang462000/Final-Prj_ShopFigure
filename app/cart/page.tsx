
import { getCartByUser } from "@/api/cart";
import CartItemCart from "@/components/Cards/CartItemCard";
import CartForm from "@/components/Cart/CartForm";
import { IProduct } from "@/interfaces";
import MainLayout from "@/layouts/main";
import * as React from "react";
import { TbArrowBackUp } from "react-icons/tb";

export interface IpageProps {}

export default async function page(props: IpageProps) {
  const cart = await getCartByUser()
//   console.log("cart---->", cart);
//  console.log();
  return (
    <MainLayout>
    <CartForm cart={cart} />
    </MainLayout>
  );
}
