
import { getCartByUser } from "@/api/cart";
import MainFooter from "@/components/Footers/MainFooter";
import HeaderSelect from "@/components/Headers/HeaderSelect";
import MainHeader from "@/components/Headers/MainHeader";
import ButtonBackToTopPage from "@/components/Pagination/ButtonBackToTopPage";
import { ILayout } from "@/interfaces";
import { cookies } from "next/headers";
import * as React from "react";

export default async function MainLayout({ children }: Readonly<ILayout>) {
  const cart = await getCartByUser()
  const accountId = cookies().get('user')?.value
 
  
  return (
    <section className="w-screen bg-[#f5f5f5]">
      <MainHeader accountId={accountId} cart={cart} />
      {children}
      <ButtonBackToTopPage />
      <MainFooter />
    </section>
  );
}
